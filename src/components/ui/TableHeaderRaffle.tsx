import { TableHead, TableHeader, TableRow } from ".";

export const TableHeaderRaffle = () => {
	return (
		<TableHeader>
			<TableRow className='text-white'>
				<TableHead className='text-sm sm:text-xl text-center'>#N</TableHead>
				<TableHead className='text-sm sm:text-xl text-center'>Nombre</TableHead>
				<TableHead className='text-sm sm:text-xl text-center'>Premio</TableHead>
				<TableHead className='text-sm sm:text-xl text-center'>
					Acciones
				</TableHead>
			</TableRow>
		</TableHeader>
	);
};
