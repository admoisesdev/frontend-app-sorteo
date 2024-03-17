import Link from 'next/link';
import { ArrowLeft } from '../icons';

export const LinkRaffle = () => {
	return (
		<Link
			href='/sorteos/lista'
			className='bg-purple-app-400 p-2 rounded-full hover:bg-purple-app-600 transition-all duration-300 absolute top-4 right-4 z-10'>
			<ArrowLeft />
		</Link>
	);
};
