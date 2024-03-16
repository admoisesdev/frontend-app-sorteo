import { TableCell, TableRow } from ".";

export const Loader = () => {
	return (
		<TableRow>
			<TableCell className='flex flex-col gap-4 items-center justify-center w-full'>
				<div className='p-2 animate-spin drop-shadow-2xl bg-white h-16 w-16 aspect-square rounded-full'>
					<div className='rounded-full h-full w-full background-blur-md bg-[#353960]'></div>
				</div>
			</TableCell>
		</TableRow>
	);
};
