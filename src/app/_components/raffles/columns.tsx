"use client"

import { RaffleResponse } from "@/infrastructure/interfaces/api.responses"
import { ColumnDef } from "@tanstack/react-table"
import { TableActions } from "./TableActions"

export const columns: ColumnDef<RaffleResponse>[] = [
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
