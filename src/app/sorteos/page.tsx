'use client';

import { ArrowBotton, ArrowRight, Logout } from '@/components/icons';
import { CardOption } from '@/components/ui/CardOption';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const initialState = false;

const Sorteos = () => {
	const [openMenu, setOpenMenu] = useState(initialState);

	return (
		<div className='w-full min-h-screen bg-hero-admin bg-cover bg-[80%_80%] flex flex-col gap-8 '>
			<header className='w-full h-20 p-4'>
				<nav className='w-full h-full flex items-center justify-between'>
					<h1 className='text-2xl uppercase text-white font-bold'>SORTEO</h1>

					<div
						className='bg-purple-app-400 relative w-[10rem] h-[3rem] border-l-transparent before:content-[""] before:absolute before:w-0 before:h-0 before:border-t-[1.5rem] before:border-t-transparent before:border-b-[1.5rem] before:border-b-transparent  before:border-r-[2rem] before:border-r-purple-app-400 before:left-[-2rem] pl-5 flex items-center gap-2 text-white shadow-md cursor-pointer'
						onClick={() => setOpenMenu(!openMenu)}>
						<span>Dimitry</span> {openMenu ? <ArrowBotton /> : <ArrowRight />}
						<ul
							className={`absolute bg-purple-app-400 w-[8rem] h-[3rem] top-[3rem] right-0 rounded-t-none transition-all duration-200 rounded-md ${
								openMenu
									? 'opacity-100 visible translate-y-0'
									: 'opacity-0 invisible translate-y-10'
							}`}>
							<li className='w-full h-12 p-2 hover:bg-violet-600 rounded-md rounded-t-none transition-colors duration-300'>
								<Link
									href='/'
									className='w-full h-full text-sm flex items-center gap-2'>
									<Logout /> Cerrar sesión
								</Link>
							</li>
						</ul>
					</div>
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
							className='py-2 px-4 mt-2 bg-backgroundBtn4 rounded-full text-black text-lg'>
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
							className='py-2 px-4 bg-backgroundBtn5 text-white rounded-full text-lg'>
							Ver Sorteos
						</Link>
					</CardOption>
				</section>
			</main>
		</div>
	);
};

export default Sorteos;
