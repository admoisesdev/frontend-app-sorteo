import { ColumnDef } from "@tanstack/react-table"
import { TypographyH2, TypographyH4 } from "../../shared/typography"
import { DataTable } from "../DataTable"
import { Button } from "../../ui/button"

const colums: ColumnDef<any>[] = [
	{
		accessorKey: "name",
		header: "Name",
	},
	{
		id: "actions",
		cell: ( { row } ) => {
			const participe = row.original
			return <Button className="bg-green-500 hover:bg-green-600">Elegir</Button>
		},
	},
]

export const WinnersItem = () => {

	const data = [
		{ id: 1, name: "Jorge" }, 
		{ id: 2, name: "Justin" }, 
		{ id: 3, name: "Jose" }, 
		{ id: 4, name: "Jose" }, 
		{ id: 5, name: "Jose" }
	]

	return (
		<article className="bg-gradient-to-b from-purple-ligth-100 
			to-purple-light-150 rounded-md p-4">
			<div className="space-y-4">
				<TypographyH2 className="text-center">Elegir un ganador</TypographyH2>
				<TypographyH4>Listado de participantes</TypographyH4>
			</div>

			<DataTable
				columns={colums}
				data={data}
				className="text-blue-dark-app-900" />
		</article>
	)
}
