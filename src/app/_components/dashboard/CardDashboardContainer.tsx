export const CardDashboardContainer = ({ children }: { children: React.ReactNode }) => {
	return (
		<article className="w-11/12 min-[450px]:w-96 md:w-full mx-auto 
			bg-gradient-to-t from-purple-app-300/10 group to-purple-app-300/50 
			backdrop-blur-sm p-8 flex flex-col gap-10 items-center rounded-md">
			{ children }
		</article>
	)
}
