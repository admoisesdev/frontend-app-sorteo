import Image from "next/image"

import { CardDashboardContainer, DashBoardLink } from "@/app/_components/dashboard"
import { TypographyH2 } from "@/app/_components/shared/typography"

const DashboardPage = () => {
	return (
		<main className="w-full flex items-center justify-center py-6">
			<section className="max-w-2xl w-full grid md:grid-cols-2 gap-8">
				<CardDashboardContainer>
					<TypographyH2 className="text-white">Tú puedes</TypographyH2>
					<Image
						className="group-hover:animate-spin"
						src='/card-1.png'
						alt='card-1'
						width={150}
						height={150}
					/>
					<DashBoardLink
						to="/admin/create" 
						size='lg' 
						variant='dashboardPrimary'
						text="Crear sorteos"
					/>
				</CardDashboardContainer>

				<CardDashboardContainer>
					<TypographyH2 className="text-white">Lista de sorteos</TypographyH2>
					<Image
						className="group-hover:animate-bounce"
						src='/card-2.png'
						alt='card-2'
						width={180}
						height={180}
					/>
					
					<DashBoardLink
						to="/admin/raffles" 
						size='lg' 
						variant='dashboardSecondary'
						text="Ver sorteos"
					/>
				</CardDashboardContainer>
			</section>
		</main>
	)
}

export default DashboardPage