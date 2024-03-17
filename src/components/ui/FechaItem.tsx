export const FechaItem = ({
	title,
	description,
}: {
	title: string;
	description: string;
}) => {
	return (
		<div className='flex flex-col gap-2'>
			<h3 className={`text-white font-bold `}>{title}</h3>
			<p className={`p-2 text-blue-app-800 rounded-md bg-white/60 font-bold`}>
				{description}
			</p>
		</div>
	);
};
