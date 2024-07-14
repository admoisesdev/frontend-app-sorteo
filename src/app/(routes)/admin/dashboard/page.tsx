import Image from "next/image"
import Link from "next/link"

import { TypographyH2 } from "@/app/_components/shared/typography"
import { Button } from "@/app/_components/ui/button"

const DashboardPage = () => {
	return (
		<main className="w-full flex items-center justify-center py-6">
			<section className="max-w-2xl w-full grid md:grid-cols-2 gap-8">

				<article className="w-11/12 min-[450px]:w-96 md:w-full mx-auto 
					bg-gradient-to-t from-purple-app-300/10 to-purple-app-300/50 
					backdrop-blur-sm group p-8 flex flex-col gap-10 items-center rounded-md">
					<TypographyH2 className="text-white">Tú puedes</TypographyH2>

					<Image
						className="group-hover:animate-spin"
						src='/card-1.png'
						alt='card-1'
						width={150}
						height={150}
					/>

					<Button
						size='lg' 
						variant='dashboardPrimary'>
						<Link
							href="/admin/create">
							Crear Sorteos
						</Link>
					</Button>
				</article>

				<article className="w-11/12 min-[450px]:w-96 md:w-full mx-auto 
					bg-gradient-to-t from-purple-app-300/10 group to-purple-app-300/50 
					backdrop-blur-sm p-8 flex flex-col gap-10 items-center rounded-md">
					
					<TypographyH2 className="text-white">Lista de sorteos</TypographyH2>

					<Image
						className="group-hover:animate-bounce"
						src='/card-2.png'
						alt='card-2'
						width={180}
						height={180}
					/>

					<Button 
						size='lg'
						variant='dashboardSecondary'>
						<Link
							href="/admin/raffles">
							Ver sorteos
						</Link>
					</Button>
				</article>
			</section>
		</main>
	)
}

export default DashboardPage