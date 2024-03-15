import { TableCell, TableRow } from './ui/table';
import { Delete, Edit } from './icons';
import { cutText } from '@/utils/utils';


export const TableItem = ({ id, title, description }: TableInfo) => {
	return (
		<TableRow
			key={id}
			className='bg-[#424C70]'>
			<TableCell className='text-center border-l-4 border-l-purple-app-400 sm:text-lg'>
				{id}
			</TableCell>
			<TableCell className='text-center sm:text-lg'>{cutText(title)}</TableCell>
			<TableCell className='text-center sm:text-lg'>
				{cutText(description)}
			</TableCell>
			<TableCell className='text-center flex flex-col min-[480px]:flex-row gap-2 items-center justify-center'>
				<button>
					<Edit />
				</button>
				<button>
					<Delete />
				</button>
			</TableCell>
		</TableRow>
	);
};
