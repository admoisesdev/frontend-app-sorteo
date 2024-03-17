export const CardBgGrid = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='w-full bg-hero-card rounded-md'>
			<div
				className={`bg-black/20 rounded-md backdrop-blur-sm grid grid-cols-2 gap-2 px-4 py-2`}>
				{children}
			</div>
		</div>
	);
};
