'use client';

import { TableItem } from '@/components/ui';
import { TableListVacio } from '@/components/ui';
import { Loader } from '@/components/ui/Loader';
import { RaffleModal } from '@/components/ui/RaffleModal';
import SorteosContainer from '@/components/ui/SorteosContainer';
import { TableHeaderRaffle } from '@/components/ui/TableHeaderRaffle';
import { Table, TableBody } from '@/components/ui/table';

import { useRaffle } from '@/hooks/useRaffle';
import { useState } from 'react';

const initialState = false;
const initialStateId = '';

const Lista = () => {
	const { queryRaffles } = useRaffle();

	const [open, setOpen] = useState(initialState);
	const [idRaffle, setIdRaffle] = useState(initialStateId);

	const handleOpen = () => {
		setOpen((prev) => !prev);
	};

	const getRaffleId = (id: string) => {
		setIdRaffle(id);
	};

	//ESto va hacia la tabla

	return (
		<SorteosContainer moreClass='bg-hero-sorteos bg-cover bg-[80%_80%]'>
			<main className='w-full min-h-[100vh_-_10rem] flex flex-col items-center px-2'>
				<section
					className='w-full h-full lg:w-[80%] p-4

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
											handleOpen={handleOpen}
											getIdRaffle={getRaffleId}
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

			<RaffleModal
				open={open}
				raffleId={idRaffle}
				handleOpen={handleOpen}
			/>
		</SorteosContainer>
	);
};

export default Lista;
