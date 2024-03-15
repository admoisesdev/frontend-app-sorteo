export const CardInfo = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='bg-hero-card rounded-md'>
			<div className='bg-black bg-opacity-30 rounded-md backdrop-blur-sm p-4'>
				{children}
			</div>
		</div>
	);
};
