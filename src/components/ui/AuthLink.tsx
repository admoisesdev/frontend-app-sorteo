import Link from 'next/link';

interface Props {
	text: string;
	route: string;
}

export const AuthLink = ({ text, route }: Props) => {
	return (
		<div className='bg-opacity-30 bg-gray-100 p-2 rounded-md'>
			<p className='text-center'>
				{text} {''}
				<Link
					href={route}
					className='underline decoration-2'>
					aquí
				</Link>
			</p>
		</div>
	);
};
