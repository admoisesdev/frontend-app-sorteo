'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import useAuth from '@/hooks/useAuth';
import { useRaffleLatest } from '@/hooks/useRaffleLatest';

import { Presentacion } from '@/components/ui/Presentacion';

export default function Home() {
	const router = useRouter();
	const { logout, isAuthenticated } = useAuth();

	const { queryRaffleLatest } = useRaffleLatest();

	return (
		<div className='w-full min-h-screen bg-hero-home bg-cover bg-[50%_50%]'>
			<div className='w-full h-full backdrop-blur-sm bg-opacity-40 bg-black'>
				<header className='w-full h-20'>
					<nav className='w-full flex p-4 items-center justify-between'>
						<span className='text-white text-2xl uppercase'>Sorteo</span>

						<div className='flex items-center gap-4 text-white text-lg'>
							{isAuthenticated ? (
								<button
									className='text-white text-lg'
									onClick={() => {
										logout();
										router.push('/auth/login');
									}}>
									Cerrar sesión
								</button>
							) : (
								<>
									<Link
										href='/auth/login'
										className='px-4 py-1 bg-blue-app-400 rounded-md border-[2px] border-transparent'>
										Login
									</Link>
								</>
							)}
						</div>
					</nav>
				</header>
				<main className='w-full min-h-[calc(100vh_-_5rem)] pb-4 lg:p-0'>
					<Presentacion raffle={queryRaffleLatest.data as Raffle} />
				</main>
			</div>
		</div>
	);
}
