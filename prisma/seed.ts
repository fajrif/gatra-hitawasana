import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'
import bcrypt from 'bcryptjs'

const pool = new Pool({ connectionString: process.env.DATABASE_URL })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function main() {
    console.log('🌱 Starting database seed...')

    // Create initial admin user
    const hashedPassword = await bcrypt.hash('Secret1234!', 10)

    const admin = await prisma.admin.upsert({
        where: { email: 'admin@gatrahitawasana.com' },
        update: {},
        create: {
            email: 'admin@gatrahitawasana.com',
            full_name: 'Administrator',
            password_hash: hashedPassword,
        },
    })

    console.log('✅ Created admin user:', { email: admin.email, full_name: admin.full_name })

    // Create some sample categories
    const categories = await Promise.all([
        prisma.category.upsert({
            where: { id: 'category-1' },
            update: {},
            create: {
                id: 'category-1',
                name: 'Technology',
            },
        }),
        prisma.category.upsert({
            where: { id: 'category-2' },
            update: {},
            create: {
                id: 'category-2',
                name: 'Business',
            },
        }),
        prisma.category.upsert({
            where: { id: 'category-3' },
            update: {},
            create: {
                id: 'category-3',
                name: 'News',
            },
        }),
    ])

    console.log('✅ Created categories:', categories.map(c => c.name).join(', '))
    console.log('🎉 Seed completed successfully!')
}

main()
    .catch((e) => {
        console.error('❌ Seed failed:', e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
