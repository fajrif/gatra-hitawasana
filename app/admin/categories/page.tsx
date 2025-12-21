'use client'

import { useState } from 'react'
import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { CategoryDialog } from '@/components/admin/CategoryDialog'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { Pencil, Trash2 } from 'lucide-react'
import { format } from 'date-fns'
import { useEffect } from 'react'

interface Category {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
}

export default function CategoriesPage() {
    const router = useRouter()
    const [categories, setCategories] = useState<Category[]>([])
    const [dialogOpen, setDialogOpen] = useState(false)
    const [editCategory, setEditCategory] = useState<Category | null>(null)
    const [deleteId, setDeleteId] = useState<string | null>(null)
    const [isDeleting, setIsDeleting] = useState(false)

    const fetchCategories = async () => {
        const response = await fetch('/api/categories')
        const data = await response.json()
        setCategories(data)
    }

    useEffect(() => {
        fetchCategories()
    }, [])

    const handleEdit = (category: Category) => {
        setEditCategory(category)
        setDialogOpen(true)
    }

    const handleAdd = () => {
        setEditCategory(null)
        setDialogOpen(true)
    }

    const handleSuccess = () => {
        fetchCategories()
        router.refresh()
    }

    const handleDelete = async () => {
        if (!deleteId) return

        setIsDeleting(true)
        try {
            const response = await fetch(`/api/categories/${deleteId}`, {
                method: 'DELETE',
            })

            if (!response.ok) {
                throw new Error('Failed to delete category')
            }

            setDeleteId(null)
            fetchCategories()
            router.refresh()
        } catch (error) {
            console.error('Error deleting category:', error)
            alert('Failed to delete category')
            setIsDeleting(false)
        }
    }

    return (
        <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Categories</h1>
                    <p className="mt-2 text-gray-600">Manage article categories</p>
                </div>
                <Button onClick={handleAdd}>Add Category</Button>
            </div>

            <div className="bg-white shadow rounded-lg overflow-hidden">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Created</TableHead>
                            <TableHead>Updated</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {categories.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={4} className="text-center text-gray-500">
                                    No categories found
                                </TableCell>
                            </TableRow>
                        ) : (
                            categories.map((category) => (
                                <TableRow key={category.id}>
                                    <TableCell className="font-medium">{category.name}</TableCell>
                                    <TableCell>
                                        {format(new Date(category.createdAt), 'MMM dd, yyyy')}
                                    </TableCell>
                                    <TableCell>
                                        {format(new Date(category.updatedAt), 'MMM dd, yyyy')}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={() => handleEdit(category)}
                                            >
                                                <Pencil className="h-4 w-4" />
                                            </Button>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={() => setDeleteId(category.id)}
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>

            <CategoryDialog
                open={dialogOpen}
                onOpenChange={setDialogOpen}
                category={editCategory}
                onSuccess={handleSuccess}
            />

            <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete the
                            category and may affect associated articles.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={handleDelete} disabled={isDeleting}>
                            {isDeleting ? 'Deleting...' : 'Delete'}
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}
