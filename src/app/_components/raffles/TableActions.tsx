import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/_components/ui/dropdown-menu"

import { RaffleResponse } from "@/infrastructure/interfaces/api.responses"
import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { Button } from "../ui/button"

export const TableActions = ({raffle}: {raffle: RaffleResponse}) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild className="bg-purple-app-300 hover:bg-purple-500
			outline-none focus:outline-none hover:text-white">
				<Button variant="ghost" className="h-8 w-8 p-0">
					<span className="sr-only">Open menu</span>
					<DotsHorizontalIcon className="h-4 w-4" />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="bg-purple-app-300 border-none text-white">
				<DropdownMenuLabel>Actions</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>Ver sorteo</DropdownMenuItem>
				<DropdownMenuItem>Editar sorteo</DropdownMenuItem>
				<DropdownMenuItem>Eliminar sorteo</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
