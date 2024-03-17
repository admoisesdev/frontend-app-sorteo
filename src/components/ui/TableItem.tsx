import { TableCell, TableRow } from './table';
import { Delete, Edit } from '../icons';
import { cutText } from '@/utils/utils';
import { useMutationRaffle } from '@/hooks/useMutationRaffle';
import Link from 'next/link';
import { MouseEvent } from 'react';

interface Props {
	id: string;
	name: string;
	description: string;
	position: number;
	onOpen: () => void;
	getIdRaffle: (id: string) => void;
}

export const TableItem = ({
	id,
	name,
	description,
	position,
	getIdRaffle,
	onOpen,
}: Props) => {
	const { mutationDelete } = useMutationRaffle();

	const handleDeleteRaffle = async (e: MouseEvent<HTMLButtonElement>,id: string) => {
    e.stopPropagation();
		await mutationDelete.mutateAsync(id);
	};

	const handleOpenModal = (id: string) => {
		onOpen();
		getIdRaffle(id);
	};

  

	return (
		<TableRow
			key={id}
			onClick={() => handleOpenModal(id)}
			className='bg-[#424C70] hover:bg-blue-app-700 cursor-pointer transition-colors duration-200'>
			<TableCell className='text-center border-l-4 border-l-purple-app-400 sm:text-lg'>
				{position + 1}
			</TableCell>
			<TableCell className='text-center sm:text-lg'>{cutText(name)}</TableCell>
			<TableCell className='text-center sm:text-lg'>
				{cutText(description)}
			</TableCell>
			<TableCell className='text-center flex flex-col min-[480px]:flex-row gap-2 items-center justify-center'>
				<Link onClick={e => e.stopPropagation()} href={`/sorteos/editar/${id}`}>
					<Edit />
				</Link>
				<button onClick={(e) => handleDeleteRaffle(e,id)}>
					<Delete />
				</button>
			</TableCell>
		</TableRow>
	);
};
