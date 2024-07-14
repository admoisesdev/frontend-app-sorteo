import Link from "next/link"
import { CardDateInfo, CardPremio,CardFullInfo } from "./cards"

export const Presentantion = () => {

	return (
		<main className="text-blue-dark-app-900 w-11/12 max-w-3xl 
		mx-auto flex flex-col items-center gap-4 py-4">
			<CardPremio
				premio="Cursos HTML5,CSS3,etc"
			/>

			<div className="grid md:grid-cols-2 place-items-center 
			w-full gap-4">
				<CardFullInfo
					title="Descripción del sorteo"
					description="Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo Contenido aquí, contenido aquí. Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de"
				/>

				<CardFullInfo
					title="Descripción del premio"
					description="Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo Contenido aquí, contenido aquí. Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de"
				/>
			</div>

			<CardDateInfo
				dateStart={ new Date() }
				dateEnd={ new Date() }
			/>

			<Link
				href="/auth/login"
				className='variant-header-secondary px-4 py-2 
				rounded-md text-2xl'>
				Participar
			</Link>

		</main>
	)
}
