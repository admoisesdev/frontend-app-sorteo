import { ClassNameValue } from 'tailwind-merge';

export const CardInfoWithBg = ({
	title,
	description,
	classNameDescription,
	classNameCardContiner,
	classNameTitle,
}: {
	title: string;
	description: string;
	classNameDescription?: ClassNameValue;
	classNameCardContiner?: ClassNameValue;
	classNameTitle?: ClassNameValue;
}) => {
	return (
		<div className='w-full bg-hero-card rounded-md'>
			<div
				className={`bg-black/20 rounded-md backdrop-blur-sm flex flex-col gap-2 px-4 py-2 ${classNameCardContiner}`}>
				<h3 className={`text-white font-bold ${classNameTitle}`}>{title}</h3>
				<p
					className={`p-2 text-blue-app-800 rounded-md bg-white/60 ${classNameDescription}`}>
					{description}
				</p>
			</div>
		</div>
	);
};
