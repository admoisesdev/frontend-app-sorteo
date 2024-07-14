import { HeaderLinks, HeaderLogo} from "./"

export const HeaderShared = () => {
	return (
		<header className="w-full px-4 py-2 sm:py-4">
			<nav className="w-full flex items-center justify-between">
				<HeaderLogo/>
				<HeaderLinks/>
			</nav>
		</header>
	)
}
