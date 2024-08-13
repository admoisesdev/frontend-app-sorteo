import { HeaderShared } from "@/app/_components/shared/header"

const EditLayout = ({children}:{children:React.ReactNode}) => {
	return (
		<div className="w-full min-h-screen bg-hero-admin bg-cover">
			<HeaderShared/>
			<main className="w-full flex items-center justify-center py-2">
				{children}
			</main>
		</div>
	)
}

export default EditLayout