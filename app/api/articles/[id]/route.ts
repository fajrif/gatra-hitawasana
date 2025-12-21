import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { put } from '@vercel/blob'
import { generateSlug } from '@/lib/slug'

// GET /api/articles/[id]
export async function GET(
    request: Request,
    context: { params: Promise<{ id: string }> }
) {
    try {
        const params = await context.params
        const article = await prisma.article.findUnique({
            where: { id: params.id },
            include: {
                category: true,
            },
        })

        if (!article) {
            return NextResponse.json(
                { error: 'Article not found' },
                { status: 404 }
            )
        }

        return NextResponse.json(article)
    } catch (error) {
        console.error('Error fetching article:', error)
        return NextResponse.json(
            { error: 'Failed to fetch article' },
            { status: 500 }
        )
    }
}

// PUT /api/articles/[id]
export async function PUT(
    request: Request,
    context: { params: Promise<{ id: string }> }
) {
    try {
        const params = await context.params
        const session = await getServerSession(authOptions)
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const formData = await request.formData()
        const image = formData.get('image') as File | null
        let imageUrl: string | null | undefined = undefined

        // Handle image upload if new image provided
        if (image && image.size > 0) {
            if (process.env.BLOB_READ_WRITE_TOKEN) {
                const blob = await put(image.name, image, {
                    access: 'public',
                })
                imageUrl = blob.url
            } else {
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

        const data: any = {
            title: formData.get('title') as string,
            slug: formData.get('slug') as string,
            short_description: formData.get('short_description') as string || null,
            content: formData.get('content') as string || null,
            category_id: formData.get('category_id') as string,
            published_date: formData.get('published_date')
                ? new Date(formData.get('published_date') as string)
                : null,
            status: formData.get('status') as 'DRAFT' | 'PUBLISHED',
            meta_title: formData.get('meta_title') as string || null,
            meta_description: formData.get('meta_description') as string || null,
        }

        if (imageUrl !== undefined) {
            data.image = imageUrl
        }

        // Check if slug already exists (excluding current article)
        const existingArticle = await prisma.article.findUnique({
            where: { slug: data.slug },
        })

        if (existingArticle && existingArticle.id !== params.id) {
            return NextResponse.json(
                { error: 'Slug already exists' },
                { status: 400 }
            )
        }

        const article = await prisma.article.update({
            where: { id: params.id },
            data,
            include: {
                category: true,
            },
        })

        return NextResponse.json(article)
    } catch (error) {
        console.error('Error updating article:', error)
        return NextResponse.json(
            { error: 'Failed to update article' },
            { status: 500 }
        )
    }
}

// DELETE /api/articles/[id]
export async function DELETE(
    request: Request,
    context: { params: Promise<{ id: string }> }
) {
    try {
        const params = await context.params
        const session = await getServerSession(authOptions)
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        await prisma.article.delete({
            where: { id: params.id },
        })

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('Error deleting article:', error)
        return NextResponse.json(
            { error: 'Failed to delete article' },
            { status: 500 }
        )
    }
}
