import { formatearFecha } from '@/utils/utils';
import { CardBgGrid } from './CardBgGrid';
import { CardInfoWithBg } from './CardInfoWithBg';
import { FechaItem } from './FechaItem';

interface AppProps {
	raffle: Raffle;
}

export const Presentacion = ({ raffle }: AppProps) => {
	return (
		<section className='w-[90%] flex justify-center flex-col gap-4 items-center mx-auto'>
			<div className='w-full sm:w-[25rem]'>
				<header className='bg-gradient-to-l rounded-md from-[#FFC327] to-[#FFF500] p-1 rounded-b-none'>
					<h2 className='text-xl text-center text-blue-app-800'>
						{raffle?.name}
					</h2>
				</header>
				<CardInfoWithBg
					title='Premio'
					description={raffle?.prize.name}
					classNameDescription='font-bold text-lg text-center'
				/>
			</div>

			<div className='flex gap-4 w-full flex-col sm:w-[25rem] lg:flex-row lg:w-[50rem]'>
				<CardInfoWithBg
					title='Descripción del sorteo'
					description={raffle?.description}
				/>
				<CardInfoWithBg
					title='Descripción del premio'
					description={raffle?.prize.description}
				/>
			</div>

			<div className='w-full sm:w-[25rem]'>
				<header className='bg-gradient-to-r rounded-md from-[#356EFF] to-[#CC5FFF] p-1 rounded-b-none'>
					<h2 className='text-xl text-center text-white'>Fecha del sorteo</h2>
				</header>
				<CardBgGrid>
					<FechaItem
						title='Fecha inicio'
						description={formatearFecha(raffle?.createAt)}
					/>
					<FechaItem
						title='Fecha Finalización'
						description={formatearFecha(raffle?.endAt)}
					/>
				</CardBgGrid>
			</div>

			<button className='bg-gradient-to-l rounded-md from-[#FFC327] to-[#FFF500] px-4 py-2 text-2xl'>
				Participar
			</button>
		</section>
	);
};
