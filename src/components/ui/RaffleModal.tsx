import { useRaffle } from '@/hooks/useRaffle';
import { Table, TableBody, TableCell, TableRow } from '.';
import { CloseIcon } from '../icons';

interface Props {
	open: boolean;
	raffleId: string;
	handleOpen: () => void;
}

export const RaffleModal = ({ open, handleOpen, raffleId }: Props) => {
	const { queryRaffle } = useRaffle(raffleId);

	console.log(queryRaffle.data);

	return (
		<div
			className={`absolute top-0 w-full flex items-center justify-center bg-black/40 z-50 backdrop-blur-md py-16 lg:py-0 ${
				open ? 'opacity-100 visible' : 'opacity-0 invisible'
			}`}>
			<button
				className='absolute top-4 right-4 cursor-pointer'
				onClick={handleOpen}>
				<CloseIcon />
			</button>

			<div className='grid lg:grid-cols-[repeat(2,25rem)] gap-4 place-items-center justify-center w-[90%] sm:w-[35rem] lg:w-full min-h-screen'>
				<article className='bg-gradient-to-r from-[#CBC7FF] to-[#C5D8FF] w-full p-4 rounded-sm flex flex-col gap-4 min-h-[510px]'>
					<h2 className='text-center text-2xl text-blue-dark-app-900'>
						Hola que tal
					</h2>
					<div className='flex flex-col gap-3'>
						<h3 className='text-lg text-blue-dark-app-900'>
							Descripción del sorteo
						</h3>
						<p className='bg-blue-dark-app-500 text-white p-2 rounded-md'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Laboriosam sunt ad explicabo, architecto veniam quod soluta eaque
							nulla assumenda consectetur vero ex quaerat commodi necessitatibus
							saepe pariatur voluptate atque ipsa.
						</p>
					</div>
					<div className='flex flex-col gap-3 text-blue-dark-app-900'>
						<h3 className='text-lg'>Descripción del premio</h3>
						<div className='flex flex-col gap-2 bg-gradient-to-r from-[#FFC327] to-[#FFF500] p-2 rounded-md'>
							<h4 className='text-center text-xl'>Holaaasdas</h4>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Laudantium perferendis sunt, nobis fugit quidem in distinctio
								vel nulla incidunt doloremque maiores laborum enim soluta totam
								libero nemo aperiam. Obcaecati, magni.
							</p>
						</div>
					</div>
				</article>
				<article className='bg-gradient-to-r from-[#CBC7FF] to-[#C5D8FF] w-full p-4 rounded-sm h-[510px] flex flex-col gap-5 overflow-hidden'>
					<h2 className='text-center text-2xl text-blue-dark-app-900'>
						Elegir Ganador
					</h2>

					<div className='flex flex-col gap-7 overflow-y-scroll'>
						<h3 className='text-lg text-blue-dark-app-900'>
							Lista de participantes
						</h3>
						<p className='text-lg text-blue-dark-app-900'>Nombre</p>

						<Table>
							<TableBody>
								<TableRow className='bg-[#424C70] transition-colors duration-200'>
									<TableCell className='text-center border-l-4 border-l-blue-app-400 text-lg p-1 px-4'>
										Justin
									</TableCell>
									<TableCell className='text-center text-lg p-1 px-4 bg-blue-400 cursor-pointer'>
										Elegir
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</div>
				</article>
			</div>
		</div>
	);
};
