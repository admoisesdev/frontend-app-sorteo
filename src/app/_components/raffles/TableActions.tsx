import Link from "next/link"

import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/_components/ui/dropdown-menu"
import { Button } from "../ui/button"

import { RaffleEntity } from "@/core/entities/raffle.entity"
import { useRaffleMutation } from "@/app/_hooks/raffle"


export const TableActions = ({raffle}: {raffle: RaffleEntity}) => {

	const {deleteRaffleMutation} = useRaffleMutation()

	const handleDeleteRaffle = (id: string) => {
		deleteRaffleMutation.mutate(id)
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild className="bg-purple-app-300 hover:bg-purple-500
			outline-none focus:outline-none hover:text-white">
				<Button variant="ghost" className="h-8 w-8 p-0">
					<span className="sr-only">Open menu</span>
					<DotsHorizontalIcon className="h-4 w-4" />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="bg-purple-app-300 border-none 
			text-white">
				<DropdownMenuLabel>Acciones</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					<Link href={`/admin/raffles/${raffle.id}`}>Ver sorteo</Link>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<Link href={`/admin/edit/${raffle.id}`}>Editar sorteo</Link>
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => handleDeleteRaffle(raffle.id)}>
					Eliminar sorteo
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
