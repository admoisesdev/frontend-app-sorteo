import { RaffleResponse } from "@/infrastructure/interfaces/api.responses";
import { DataTable } from "../../../_components/raffles/DataTable";
import { columns } from "../../../_components/raffles/columns";
import { TypographyH1 } from "@/app/_components/shared/typography";

const fetchData = async () => {
	const raffles: RaffleResponse[] = Array.from({ length: 500 }, (_, index) => ({
		id: crypto.randomUUID(),
		prize: `Prize ${index + 1}`,
		name: `Sorteo ${index + 1}`,
	}));

	return raffles
}

const RafflesPage = async ()  => {
	const data = await fetchData();

	return (
		<main className="w-full flex items-center justify-center p-2">
			<section className="max-w-5xl w-full space-y-6 bg-blue-dark-app-300/80
			p-4 rounded-md">
				<TypographyH1 className="lg:text-4xl text-white">Lista de sorteos</TypographyH1>
				<DataTable columns={columns} data={data} />
			</section>
		</main>
	)
}

export default RafflesPage