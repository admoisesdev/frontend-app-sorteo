import { TableCell, TableRow } from './ui/table';
import { SadIcon } from './icons';

export const TableListVacio = () => {
	return (
		<TableRow>
			<TableCell className='flex flex-col gap-4 items-center justify-center w-full'>
				<h2 className='text-4xl md:text-6xl text-center text-[#5B5E80] font-bold'>
					Lista de sorteos vacio
				</h2>
				<SadIcon />
			</TableCell>
		</TableRow>
	);
};
