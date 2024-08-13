'use client'

import { useEffect, useState } from "react"
import { HeaderLinks, HeaderLogo,HeaderProfile } from "./"
import { authStore } from '../../../../app/_context/authState';

export const HeaderShared = () => {
	const { user, onLogout } = authStore()

	const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

	return (
		<header className="w-full px-4 py-2 sm:py-4">
			<nav className="w-full flex items-center justify-between">
				<HeaderLogo role={user?.role[0] as string}/>
				
				{
					hydrated && user?.token
						? <HeaderProfile username={user?.username} onLogout={onLogout}/> 
						: <HeaderLinks/>
				}
			</nav>
		</header>
	)
}
