import { ExitIcon } from "@radix-ui/react-icons";
import { Button } from "../../ui/button";

interface Props{
	openMenu:boolean
	onLogout: () => void
}

export const ProfileMenu = ({openMenu,onLogout}:Props) => {	
	return (
		<ul
			className={ `absolute bg-purple-app-400 w-[9rem] h-[3rem] 
					top-[3rem] right-0 rounded-t-none transition-all duration-200 
					rounded-md ${ openMenu
					? "opacity-100 visible translate-y-0"
					: "opacity-0 invisible translate-y-10"
				}` }
		>
			<li className="w-full h-12 hover:bg-violet-600 
					rounded-md rounded-t-none transition-colors 
          duration-300 flex items-center ">
				<Button
					variant="withIcon"
					onClick={ onLogout }
				>
					<ExitIcon />
					Cerrar sesión
				</Button>
			</li>
		</ul>
	)
}
