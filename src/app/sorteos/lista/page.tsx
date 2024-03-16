'use client';

import { TableItem } from '@/components/ui';
import { TableListVacio } from '@/components/ui';
import { Loader } from '@/components/ui/Loader';
import SorteosContainer from '@/components/ui/SorteosContainer';
import { TableHeaderRaffle } from '@/components/ui/TableHeaderRaffle';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { useRaffle } from '@/hooks/useRaffle';

const Lista = () => {
	const { queryRaffles } = useRaffle();

	return (
		<SorteosContainer moreClass='bg-hero-sorteos bg-cover bg-[80%_80%]'>
			<main className='w-full min-h-[100vh_-_10rem] flex flex-col p-4 items-center'>
				<section
					className='w-full lg:w-[80%] p-4
				 flex flex-col gap-8 bg-blue-dark-app-500'>
					<h2 className='text-4xl text-white'>Lista de sorteos</h2>

					<Table>
						<TableHeaderRaffle />
						<TableBody>
							{!queryRaffles.isLoading ? (
								(queryRaffles.data as Raffle[]).length > 0 ? (
									(queryRaffles.data as Raffle[]).map((info: Raffle, i) => (
										<TableItem
											key={info.id}
											position={i}
											{...info}
										/>
									))
								) : (
									<TableListVacio />
								)
							) : (
								<Loader />
							)}
						</TableBody>
					</Table>
				</section>
			</main>
		</SorteosContainer>
	);
};

export default Lista;
