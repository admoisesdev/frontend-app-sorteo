import { TableItem } from '@/components/TableItem';
import { TableListVacio } from '@/components/TableListVacio';
import { Delete, Edit, Sad } from '@/components/icons';
import SorteosContainer from '@/components/ui/SorteosContainer';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { cutText } from '@/lib/utils';

interface Sorteo {
	id: number;
	title: string;
	description: string;
}

const data: Sorteo[] = [
	/*
		{
		id: 1,
		title: 'Sorteo ejemplo 1',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio error neque enim? Unde odit quis saepe deleniti suscipit error fugiat nostrum excepturi officiis reiciendis. Veritatis amet a explicabo doloribus ducimus?',
	},
	{
		id: 2,
		title: 'Sorteo ejemplo 2',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio error neque enim? Unde odit quis saepe deleniti suscipit error fugiat nostrum excepturi officiis reiciendis. Veritatis amet a explicabo doloribus ducimus?',
	},
	{
		id: 3,
		title: 'Sorteo ejemplo 3',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio error neque enim? Unde odit quis saepe deleniti suscipit error fugiat nostrum excepturi officiis reiciendis. Veritatis amet a explicabo doloribus ducimus?',
	},
	*/
];

const Lista = () => {
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
