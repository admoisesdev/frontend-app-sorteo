"use client"

import { ColumnDef } from "@tanstack/react-table"
import { RaffleEntity } from "@/core/entities/raffle.entity"
import { TableActions } from "./TableActions"

export const columns: ColumnDef<RaffleEntity>[] = [
  {
    accessorKey: "position",
    header: "#N",
    cell: ({row}) => {
      return row.index + 1   
    },
  },
  {
    accessorKey: "name",
    header: "Nombre",
  },
  {
    accessorKey: "prize",
    header: "Premio",
    cell: ({row}) => {
      return row.original.prize.name
    }
  },
  {
    accessorKey: "createAt",
    header: "Inicio",
    cell: ({row}) => {
      const date = new Date(row.original.createAt)

      return date.toLocaleString('es-ES',{
        dateStyle: 'short',
      })
    }
  },
  {
    accessorKey: "endAt",
    header: "Fin",
    cell: ({row}) => {
      const date = new Date(row.original.endAt)

      return date.toLocaleString('es-ES',{
        dateStyle: 'short',
      })
    }
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const raffle = row.original
 
      return (
        <TableActions raffle={raffle}/>
      )
    },
  },
]
