import Link from 'next/link';
import { ArrowLeft } from '../icons';

export const LinkRaffle = () => {
	return (
		<Link
			href='/sorteos/lista'
			className='bg-purple-app-400 p-2 rounded-full hover:bg-purple-app-600 transition-all duration-300 absolute top-4 right-4 group z-10'>
			<ArrowLeft />
			<span className='absolute p-2 right-4 top-11 invisible group-hover:opacity-100 opacity-0 w-32 bg-purple-app-400 text-white rounded-md group-hover:visible'>
				Ir a sorteos
			</span>
		</Link>
	);
};
