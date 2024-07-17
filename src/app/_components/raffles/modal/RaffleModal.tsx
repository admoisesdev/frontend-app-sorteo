import { TypographyH2, TypographyH3, TypographyH4, TypographyP } from "../../shared/typography"

export const RaffleModal = () => {
	return (
		<div className="absolute bg-black/40 py-8 backdrop-blur-sm w-full min-h-full top-0 
				flex items-center justify-center">
			<div className="w-11/12 max-w-3xl min-h-[calc(100vh-10rem)] 
						mx-auto grid md:grid-cols-2 gap-4">
				<article className="bg-gradient-to-b from-purple-ligth-100 
						to-purple-light-150 rounded-md p-4 space-y-2">
					<TypographyH2 className="text-2xl">¡Sorteo de programacion!</TypographyH2>

					<div className="space-y-2">
						<TypographyH3 className="text-xl lg:text-xl">Descripción de sorteo</TypographyH3>
						<div className="bg-blue-dark-app-900 p-2 text-white rounded-md">
							<TypographyP className="text-sm lg:text-sm">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique sapiente deserunt doloribus iste eaque natus eum accusamus rem harum facilis nesciunt aspernatur in, dolore aperiam reprehenderit exercitationem eligendi inventore quae.
							</TypographyP>
						</div>
					</div>

					<div className="space-y-2">
						<TypographyH3 className="text-xl lg:text-xl">Descripción del premio</TypographyH3>
						<div className="variant-header-secondary text-blue-dark-app-900 p-2 rounded-md">
							<TypographyP className="lg:text-sm">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo laboriosam praesentium sed velit molestiae nesciunt aperiam culpa delectus quod totam corporis neque id obcaecati a nostrum excepturi, repellendus possimus magnam.
							</TypographyP>
						</div>
					</div>

					<div className="space-y-2">
						<TypographyH3 className="text-xl lg:text-xl">Fecha del sorteo</TypographyH3>

						<div className="flex justify-between">
							<div>
								<TypographyH4>Inicio</TypographyH4>
								<TypographyP>16/03/2023</TypographyP>
							</div>

							<div>
								<TypographyH4>Fin</TypographyH4>
								<TypographyP>16/03/2023</TypographyP>
							</div>
						</div>
					</div>
				</article>

				<article className="bg-gradient-to-b from-purple-ligth-100 
						to-purple-light-150 rounded-md">
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ipsum quae quia. Necessitatibus enim voluptas facilis cumque perspiciatis quas quod dolor iste vero fugit, beatae ea quo laudantium non delectus.
							</p>
						</article>
			</div>
		</div>
	)
}
