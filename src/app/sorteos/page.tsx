'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import { useEffect } from 'react';
import useAuth from '@/hooks/useAuth';

import { CardOption } from '@/components/ui/CardOption';
import { LogoutButton } from '@/components/ui/LogoutButton';

const Sorteos = () => {
	const router = useRouter();
	const { isAuthenticated } = useAuth();

	useEffect(() => {
		if (!isAuthenticated) router.push('/');
	}, [isAuthenticated, router]);

	return (
		<div className='w-full min-h-screen bg-hero-admin bg-cover bg-[80%_80%] flex flex-col gap-8 '>
			<header className='w-full h-20 p-4'>
				<nav className='w-full h-full flex items-center justify-between'>
					<h1 className='text-2xl uppercase text-white font-bold'>SORTEO</h1>

					<LogoutButton />
				</nav>
			</header>
			<main className='w-full min-h-[calc(100vh_-_10rem)] flex items-center justify-center p-4'>
				<section
					className='w-full grid grid-cols-[repeat(autofit,minmax(0,1fr))]
        min-[700px]:grid-cols-[repeat(2,20rem)] place-content-center gap-8 p-2'>
					<CardOption>
						<h2 className='text-white text-2xl'>Tú Puedes</h2>
						<Image
							src='/card-1.png'
							alt='card'
							width={200}
							height={200}
						/>
						<Link
							href=''
							className='py-2 px-4 mt-2 bg-yellow-app-400 rounded-full text-black text-lg'>
							Crear Sorteos
						</Link>
					</CardOption>

					<CardOption>
						<h2 className='text-white text-2xl'>Lista de sorteos</h2>
						<Image
							src='/card-2.png'
							alt='card'
							width={300}
							height={300}
						/>

						<Link
							href=''
							className='py-2 px-4 bg-purple-app-400 text-white rounded-full text-lg'>
							Ver Sorteos
						</Link>
					</CardOption>
				</section>
			</main>
		</div>
	);
};

export default Sorteos;
