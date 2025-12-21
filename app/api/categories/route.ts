import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { categorySchema } from '@/lib/validations/category'

// GET /api/categories - List all categories
export async function GET() {
    try {
        const categories = await prisma.category.findMany({
            orderBy: { name: 'asc' },
        })

        return NextResponse.json(categories)
    } catch (error) {
        console.error('Error fetching categories:', error)
        return NextResponse.json(
            { error: 'Failed to fetch categories' },
            { status: 500 }
        )
    }
}

// POST /api/categories - Create new category
export async function POST(request: Request) {
    try {
        const session = await getServerSession(authOptions)
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const body = await request.json()
        const validatedData = categorySchema.parse(body)

        const category = await prisma.category.create({
            data: validatedData,
        })

        return NextResponse.json(category, { status: 201 })
    } catch (error) {
        console.error('Error creating category:', error)
        if (error instanceof Error && error.name === 'ZodError') {
            return NextResponse.json(
                { error: 'Invalid data', details: error },
                { status: 400 }
            )
        }
        return NextResponse.json(
            { error: 'Failed to create category' },
            { status: 500 }
        )
    }
}
