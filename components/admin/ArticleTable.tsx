'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Pencil, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
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
import { Badge } from '@/components/ui/badge'
import { format } from 'date-fns'

interface Article {
    id: string
    title: string
    slug: string
    status: 'DRAFT' | 'PUBLISHED'
    category: { name: string }
    published_date: Date | null
    createdAt: Date
}

export function ArticleTable({ articles }: { articles: Article[] }) {
    const router = useRouter()
    const [deleteId, setDeleteId] = useState<string | null>(null)
    const [isDeleting, setIsDeleting] = useState(false)

    const handleDelete = async () => {
        if (!deleteId) return
        setIsDeleting(true)
        try {
            await fetch(`/api/articles/${deleteId}`, { method: 'DELETE' })
            setDeleteId(null)
            router.refresh()
        } catch (error) {
            alert('Failed to delete article')
            setIsDeleting(false)
        }
    }

    return (
        <>
            <div className="bg-white shadow rounded-lg overflow-hidden">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Title</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Published</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {articles.map((article) => (
                            <TableRow key={article.id}>
                                <TableCell className="font-medium">{article.title}</TableCell>
                                <TableCell>{article.category.name}</TableCell>
                                <TableCell>
                                    <Badge variant={article.status === 'PUBLISHED' ? 'default' : 'secondary'}>
                                        {article.status}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    {article.published_date
                                        ? format(new Date(article.published_date), 'MMM dd, yyyy')
                                        : '-'}
                                </TableCell>
                                <TableCell className="text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <Link href={`/admin/articles/${article.id}/edit`}>
                                            <Button variant="outline" size="sm">
                                                <Pencil className="h-4 w-4" />
                                            </Button>
                                        </Link>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => setDeleteId(article.id)}
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone.
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
        </>
    )
}
