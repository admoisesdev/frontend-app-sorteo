import { Cross1Icon } from "@radix-ui/react-icons"

import { TypographyH2, TypographyP } from "../../shared/typography"
import { Button } from "../../ui/button"
import { authStore } from "@/app/_context/authState"

export const ModalConfirmEmail = () => {

	const {isOpenModalConfirm,setModalConfirm} = authStore()

	return (
		<div className={`w-full top-0 fixed 
		${isOpenModalConfirm ? "visible opacity-100" : "invisible opacity-0"} h-full 
		bg-black/40 backdrop-blur-sm z-10 transition-all duration-300`}>
			<div className="w-full h-full flex items-center justify-center">
				<Button 
					variant="withIcon"
					className="absolute top-4 right-4 
					text-purple-ligth-100"
					onClick={() => setModalConfirm(false)}
					size="icon">
					<Cross1Icon className="size-8"/>
				</Button>

				<article className="w-11/12 max-w-sm sm:w-full space-y-3 text-blue-dark-app-900 
				p-4 bg-gradient-to-r from-purple-ligth-100 to-purple-light-150
				rounded-lg">
					<header>
						<TypographyH2 className="text-center">Validando Correo</TypographyH2>
						<TypographyP>
							Hemos enviado un enlace de verificacion a tu correo electronico.
						</TypographyP>
					</header>

					<div className="w-full text-center bg-white/40 p-1 rounded-md">
						<TypographyP>
							¡Gracias por registrarte!
						</TypographyP>
					</div>
				</article>
			</div>
		</div>
	)
}
