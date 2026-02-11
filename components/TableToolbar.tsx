"use client"

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Search, Columns, ChevronDown, Plus, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { type Table as ReactTable } from "@tanstack/react-table"

interface DataTableProps<TData> {
  table: ReactTable<TData>
}

export default function TableToolbar<TData>({
  table,
}: DataTableProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  const handleReset = () => {
    table.resetColumnFilters();
  };

  return (
    <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between py-4 gap-3">
      <div className="relative max-w-sm w-full">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search by name..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="px-9"
        />
        {isFiltered && (
          <Button
            aria-label="Reset filters"
            size="icon-xs"
            onClick={handleReset}
            className="absolute right-1 bg-destructive text-white hover:opacity-85 rounded-full top-1"
            title="clear"
          >
            <X size={18} />
          </Button>
        )}
      </div>

      <div className="flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">
              <Columns />
              <span>Columns</span>
              <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            {table
              .getAllColumns()
              .filter(
                (column) =>
                  typeof column.accessorFn !== "undefined" &&
                  column.getCanHide()
              )
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
        <Button
          size="sm"
          className="bg-brand text-white"
        >
          <Plus size={20} />
          <span className="hidden lg:inline">Add Section</span>
        </Button>
      </div>
    </div>
  )
}
