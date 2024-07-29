import { Table, TableBody, TableCell, TableRow } from "../../ui/table"
import { TypographyH2, TypographyH4 } from "../../shared/typography"
import { UserEntity } from "@/core/entities/user.entity"


interface Props {
	winner: string;
	onSelectWinner: (id: string) => void
	users: UserEntity[] | []
}

export const WinnersItem = ({winner,onSelectWinner,users}:Props) => {
	return (
		<article className="bg-gradient-to-b from-purple-ligth-100 
			to-purple-light-150 rounded-md p-4">
			<div className="space-y-4">
				<TypographyH2 className="text-center">Elegir un ganador</TypographyH2>
				<TypographyH4>Listado de participantes</TypographyH4>
			</div>

			<Table className="border-separate border-spacing-y-2">
				<TableBody>
					{ users.length > 0 ? (
						users.map( ( user ) => (
							<TableRow
								key={ user.id }
								className="bg-[#424C70] hover:bg-[#424C70] text-white"
							>
								<TableCell className="text-center border-l-4 border-l-blue-app-400 text-lg p-1 px-4">
									{ user.name }
								</TableCell>
								<TableCell
									className={ `${ winner === user.id 
										? "bg-green-600"
										: "bg-blue-400"
										} text-center text-lg p-1 cursor-pointer` }
								>
									<button onClick={() => onSelectWinner(user.id)}>
									{user.id === winner ? "Ganador" : "Elegir"}
									</button>
								</TableCell>
							</TableRow>
						) )
					) : (
						<TableRow className="bg-[#424C70] hover:bg-[#424C70] text-white transition-colors duration-200">
							<TableCell className="text-center text-lg p-1 px-4">
								No hay participantes
							</TableCell>
						</TableRow>
					) }
				</TableBody>
			</Table>
		</article>
	)
}
