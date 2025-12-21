'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { articleSchema, type ArticleFormData } from '@/lib/validations/article'
import { generateSlug } from '@/lib/slug'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

interface ArticleFormProps {
    initialData?: any
    categories: Array<{ id: string; name: string }>
}

export function ArticleForm({ initialData, categories }: ArticleFormProps) {
    const router = useRouter()
    const [error, setError] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [imagePreview, setImagePreview] = useState<string | null>(initialData?.image || null)
    const isEdit = !!initialData

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        setValue,
    } = useForm<ArticleFormData>({
        resolver: zodResolver(articleSchema),
        defaultValues: initialData || { status: 'DRAFT' },
    })

    const title = watch('title')

    // Auto-generate slug from title
    useEffect(() => {
        if (title && !isEdit) {
            setValue('slug', generateSlug(title))
        }
    }, [title, isEdit, setValue])

    const onSubmit = async (data: ArticleFormData) => {
        setIsSubmitting(true)
        setError('')

        try {
            const formData = new FormData()
            Object.entries(data).forEach(([key, value]) => {
                if (value !== undefined && value !== null) {
                    formData.append(key, value.toString())
                }
            })

            const imageInput = document.getElementById('image') as HTMLInputElement
            if (imageInput?.files?.[0]) {
                formData.append('image', imageInput.files[0])
            }

            const url = isEdit ? `/api/articles/${initialData.id}` : '/api/articles'
            const response = await fetch(url, {
                method: isEdit ? 'PUT' : 'POST',
                body: formData,
            })

            if (!response.ok) {
                const error = await response.json()
                throw new Error(error.error || 'Failed to save article')
            }

            router.push('/admin/articles')
            router.refresh()
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Something went wrong')
            setIsSubmitting(false)
        }
    }

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setImagePreview(reader.result as string)
            }
            reader.readAsDataURL(file)
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                    {error}
                </div>
            )}

            <div className="space-y-2">
                <Label htmlFor="image">Featured Image</Label>
                <Input
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    disabled={isSubmitting}
                />
                {imagePreview && (
                    <img src={imagePreview} alt="Preview" className="mt-2 max-h-48 rounded" />
                )}
            </div>

            <div className="space-y-2">
                <Label htmlFor="title">Title *</Label>
                <Input id="title" {...register('title')} disabled={isSubmitting} />
                {errors.title && <p className="text-sm text-red-600">{errors.title.message}</p>}
            </div>

            <div className="space-y-2">
                <Label htmlFor="slug">Slug *</Label>
                <Input id="slug" {...register('slug')} disabled={isSubmitting} />
                {errors.slug && <p className="text-sm text-red-600">{errors.slug.message}</p>}
            </div>

            <div className="space-y-2">
                <Label htmlFor="short_description">Short Description</Label>
                <Textarea id="short_description" {...register('short_description')} disabled={isSubmitting} />
            </div>

            <div className="space-y-2">
                <Label htmlFor="content">Content</Label>
                <Textarea id="content" {...register('content')} rows={10} disabled={isSubmitting} />
            </div>

            <div className="space-y-2">
                <Label htmlFor="category_id">Category *</Label>
                <select id="category_id" {...register('category_id')} className="w-full border rounded px-3 py-2">
                    <option value="">Select a category</option>
                    {categories.map((cat) => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                </select>
                {errors.category_id && <p className="text-sm text-red-600">{errors.category_id.message}</p>}
            </div>

            <div className="space-y-2">
                <Label htmlFor="published_date">Published Date</Label>
                <Input id="published_date" type="date" {...register('published_date')} disabled={isSubmitting} />
            </div>

            <div className="space-y-2">
                <Label htmlFor="status">Status *</Label>
                <select id="status" {...register('status')} className="w-full border rounded px-3 py-2">
                    <option value="DRAFT">Draft</option>
                    <option value="PUBLISHED">Published</option>
                </select>
            </div>

            <div className="space-y-2">
                <Label htmlFor="meta_title">SEO Title</Label>
                <Input id="meta_title" {...register('meta_title')} disabled={isSubmitting} />
            </div>

            <div className="space-y-2">
                <Label htmlFor="meta_description">SEO Description</Label>
                <Textarea id="meta_description" {...register('meta_description')} disabled={isSubmitting} />
            </div>

            <div className="flex items-center gap-4 pt-4">
                <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Saving...' : isEdit ? 'Update Article' : 'Create Article'}
                </Button>
                <Link href="/admin/articles">
                    <Button type="button" variant="outline" disabled={isSubmitting}>
                        Cancel
                    </Button>
                </Link>
            </div>
        </form>
    )
}
