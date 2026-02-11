"use client"

import {
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
} from "@tanstack/react-table"
import { useMemo, useState } from "react"
import DataTable from "@/components/DataTable"
import { MOCK_CATEGORIES } from "@/constants"
import { categoriesColumn } from "./_components/columns"
import TableToolbar from "@/components/TableToolbar"

export default function ProductsPage() {
  const columns = useMemo(() => categoriesColumn, [])
  const [data, setData] = useState(MOCK_CATEGORIES)
  const [rowSelection, setRowSelection] = useState({})
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [sorting, setSorting] = useState<SortingState>([])
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  })

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
      pagination,
    },
    getRowId: (row) => row.id.toString(),
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  })

  return (
    <div className="p-6">
      <div className="space-y-1.5 mb-3">
        <h2 className="font-semibold text-2xl">Categories</h2>
        <p className="text-foreground/85 text-[15px]">Manage your cateogries.</p>
      </div>

      <TableToolbar table={table} />

      <DataTable
        table={table}
        columnsLength={categoriesColumn.length}
      />
    </div>
  )
}
