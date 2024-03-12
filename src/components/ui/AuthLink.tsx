import Link from 'next/link';

interface Props {
	text: string;
	route: string;
}

export const AuthLink = ({ text, route }: Props) => {
	return (
		<div className='bg-opacity-50 bg-gray-300 p-2'>
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
