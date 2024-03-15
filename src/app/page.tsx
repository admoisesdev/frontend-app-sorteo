import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<div className='w-full h-screen bg-hero-home bg-cover bg-[50%_50%]'>
			<div className='w-full h-screen backdrop-blur-sm bg-opacity-40 bg-black'>
				<header className='w-full h-20'>
					<nav className='w-full flex p-4 items-center justify-between'>
						<span className='text-white text-2xl uppercase'>Sorteo</span>

						<div className='flex items-center gap-4 text-white text-lg'>
							<Link
								href='/auth/login'
								className='px-4 py-1 bg-blue-app-400 rounded-md border-[2px] border-transparent'>
								Login
							</Link>

							<Link
								href='/auth/register'
								className='px-4 py-1 border-[2px] rounded-md'>
								Register
							</Link>
						</div>
					</nav>
				</header>
				<main className='w-full min-h-[calc(100vh_-_5rem)] flex items-center justify-center relative'>
					<div className='absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[90%] sm:w-full flex items-center justify-center'>
						<Image
							src='/vector.png'
							className=''
							width={400}
							height={400}
							alt='arrows'
						/>
						<Link
							href='/auth/login'
							className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-blue-app-800 rounded-lg text-white p-2 text-4xl'>
							Participar
						</Link>
					</div>
				</main>
			</div>
		</div>
	);
}
