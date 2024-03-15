'use client';

import { TableItem } from '@/components/TableItem';
import { TableListVacio } from '@/components/TableListVacio';
import SorteosContainer from '@/components/ui/SorteosContainer';
import {
	Table,
	TableBody,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { useRaffle } from '@/hooks/useRaffle';

const Lista = () => {
	const { queryRaffles } = useRaffle();

	console.log(queryRaffles.data);

	const data: any = [];
	return (
		<SorteosContainer moreClass='bg-hero-sorteos bg-cover bg-[80%_80%]'>
			<main className='w-full min-h-[100vh_-_10rem] flex flex-col p-4 items-center'>
				<section
					className='w-full lg:w-[80%] p-4
				 flex flex-col gap-8 bg-blue-dark-app-500'>
					<h2 className='text-4xl text-white'>Lista de sorteos</h2>

					<Table>
						<TableHeader>
							<TableRow className='text-white'>
								<TableHead className='text-sm sm:text-xl text-center'>
									#N
								</TableHead>
								<TableHead className='text-sm sm:text-xl text-center'>
									Nombre
								</TableHead>
								<TableHead className='text-sm sm:text-xl text-center'>
									Premio
								</TableHead>
								<TableHead className='text-sm sm:text-xl text-center'>
									Acciones
								</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{data.length > 0 ? (
								data.map((info) => (
									<TableItem
										key={info.id}
										{...info}
									/>
								))
							) : (
								<TableListVacio />
							)}
						</TableBody>
					</Table>
				</section>
			</main>
		</SorteosContainer>
	);
};

export default Lista;
