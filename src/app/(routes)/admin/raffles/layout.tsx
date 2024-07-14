import { HeaderShared } from "@/app/_components/shared/header"

const RafflesLayout = ( { children }: Readonly<{ children: React.ReactNode }> )  => {
	return (
		<div className="w-full min-h-screen bg-hero-admin">
			<HeaderShared/>
			{children}
		</div>
	)
}

export default RafflesLayout