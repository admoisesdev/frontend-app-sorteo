export const CardOption = ({ children }: { children: React.ReactNode }) => {
	return (
		<article className='bg-gradient-to-t from-[#7D5A98]/10 to-[#7827B8]/50 backdrop-blur-sm p-8 flex flex-col gap-10 items-center rounded-md'>
			{children}
		</article>
	);
};
