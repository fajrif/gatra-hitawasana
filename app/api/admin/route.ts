import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { adminSchema } from '@/lib/validations/admin'
import bcrypt from 'bcryptjs'

// GET /api/admin - List all admins
export async function GET() {
    try {
        const session = await getServerSession(authOptions)
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const admins = await prisma.admin.findMany({
            select: {
                id: true,
                email: true,
                full_name: true,
                phone: true,
                createdAt: true,
                updatedAt: true,
            },
            orderBy: { createdAt: 'desc' },
        })

        return NextResponse.json(admins)
    } catch (error) {
        console.error('Error fetching admins:', error)
        return NextResponse.json(
            { error: 'Failed to fetch admins' },
            { status: 500 }
        )
    }
}

// POST /api/admin - Create new admin
export async function POST(request: Request) {
    try {
        const session = await getServerSession(authOptions)
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const body = await request.json()
        const validatedData = adminSchema.parse(body)

        // Check if email already exists
        const existingAdmin = await prisma.admin.findUnique({
            where: { email: validatedData.email },
        })

        if (existingAdmin) {
            return NextResponse.json(
                { error: 'Email already exists' },
                { status: 400 }
            )
        }

        // Hash password
        const password_hash = await bcrypt.hash(validatedData.password, 10)

        // Create admin
        const admin = await prisma.admin.create({
            data: {
                email: validatedData.email,
                full_name: validatedData.full_name,
                phone: validatedData.phone || null,
                password_hash,
            },
            select: {
                id: true,
                email: true,
                full_name: true,
                phone: true,
                createdAt: true,
                updatedAt: true,
            },
        })

        return NextResponse.json(admin, { status: 201 })
    } catch (error) {
        console.error('Error creating admin:', error)
        if (error instanceof Error && error.name === 'ZodError') {
            return NextResponse.json(
                { error: 'Invalid data', details: error },
                { status: 400 }
            )
        }
        return NextResponse.json(
            { error: 'Failed to create admin' },
            { status: 500 }
        )
    }
}
