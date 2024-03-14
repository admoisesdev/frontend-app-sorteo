const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className='w-full h-screen bg-hero-img bg-cover bg-[80%_80%]'>
			{children}
		</main>
	);
};

export default layout;
