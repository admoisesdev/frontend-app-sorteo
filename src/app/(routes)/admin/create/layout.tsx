import { HeaderShared } from "@/app/_components/shared/header"

const CreateLayout = ({children}:{children:React.ReactNode}) => {
	return (
		<div className="w-full min-h-screen bg-hero-admin">
			<HeaderShared/>
			<main className="w-full flex items-center justify-center py-2">
				{children}
			</main>
		</div>
	)
}

export default CreateLayout