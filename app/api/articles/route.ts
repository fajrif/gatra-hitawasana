import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { articleSchema } from '@/lib/validations/article'
import { put } from '@vercel/blob'
import { generateSlug } from '@/lib/slug'

// GET /api/articles
export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url)
        const status = searchParams.get('status')

        const where: any = {}
        if (status) {
            where.status = status
        }

        const articles = await prisma.article.findMany({
            where,
            include: {
                category: {
                    select: {
                        id: true,
                        name: true,
                    },
                },
            },
            orderBy: { createdAt: 'desc' },
        })

        return NextResponse.json(articles)
    } catch (error) {
        console.error('Error fetching articles:', error)
        return NextResponse.json(
            { error: 'Failed to fetch articles' },
            { status: 500 }
        )
    }
}

// POST /api/articles
export async function POST(request: Request) {
    try {
        const session = await getServerSession(authOptions)
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const formData = await request.formData()
        const image = formData.get('image') as File | null
        let imageUrl: string | null = null

        // Handle image upload
        if (image && image.size > 0) {
            if (process.env.BLOB_READ_WRITE_TOKEN) {
                // Production: Upload to Vercel Blob
                const blob = await put(image.name, image, {
                    access: 'public',
                })
                imageUrl = blob.url
            } else {
                // Development: Save to public directory
                const bytes = await image.arrayBuffer()
                const buffer = Buffer.from(bytes)
                const fileName = `${Date.now()}-${image.name}`
                const fs = await import('fs/promises')
                const path = await import('path')

                const uploadDir = path.join(process.cwd(), 'public', 'uploads')
                await fs.mkdir(uploadDir, { recursive: true })
                await fs.writeFile(path.join(uploadDir, fileName), buffer)
                imageUrl = `/uploads/${fileName}`
            }
        }

        // Parse form data
        const data = {
            title: formData.get('title') as string,
            slug: formData.get('slug') as string || generateSlug(formData.get('title') as string),
            short_description: formData.get('short_description') as string || undefined,
            content: formData.get('content') as string || undefined,
            category_id: formData.get('category_id') as string,
            published_date: formData.get('published_date')
                ? new Date(formData.get('published_date') as string)
                : undefined,
            status: (formData.get('status') as 'DRAFT' | 'PUBLISHED') || 'DRAFT',
            meta_title: formData.get('meta_title') as string || undefined,
            meta_description: formData.get('meta_description') as string || undefined,
        }

        // Check if slug already exists
        const existingArticle = await prisma.article.findUnique({
            where: { slug: data.slug },
        })

        if (existingArticle) {
            return NextResponse.json(
                { error: 'Slug already exists' },
                { status: 400 }
            )
        }

        const article = await prisma.article.create({
            data: {
                ...data,
                image: imageUrl,
            },
            include: {
                category: true,
            },
        })

        return NextResponse.json(article, { status: 201 })
    } catch (error) {
        console.error('Error creating article:', error)
        return NextResponse.json(
            { error: 'Failed to create article' },
            { status: 500 }
        )
    }
}
