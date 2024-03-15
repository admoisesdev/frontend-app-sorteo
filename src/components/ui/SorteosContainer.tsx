'use client';

import { ArrowBotton, ArrowRight, Logout } from '@/components/icons';
import { useState } from 'react';
import Link from 'next/link';

const initialState = false;

const SorteosContainer = ({
	children,
	moreClass,
}: {
	children: React.ReactNode;
	moreClass: string;
}) => {
	const [openMenu, setOpenMenu] = useState(initialState);
	return (
		<div className={`w-full min-h-screen flex flex-col ${moreClass}`}>
			<header className='w-full h-20 p-4'>
				<nav className='w-full h-full flex items-center justify-between'>
					<Link
						href='/sorteos'
						className='text-2xl uppercase text-white font-bold'>
						SORTEO
					</Link>
					<div
						className='bg-purple-app-400 relative w-[10rem] z-10 h-[3rem] border-l-transparent before:content-[""] before:absolute before:w-0 before:h-0 before:border-t-[1.5rem] before:border-t-transparent before:border-b-[1.5rem] before:border-b-transparent  before:border-r-[2rem] before:border-r-purple-app-400 before:left-[-2rem] pl-5 flex items-center gap-2 before:z-10 text-white shadow-md cursor-pointer'
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
			{children}
		</div>
	);
};

export default SorteosContainer;
