'use client'

import { HeaderShared } from "@/app/_components/shared/header"

const DashboardLayout = ( { children }: Readonly<{ children: React.ReactNode }> ) => {
	return (
		<div className="w-full min-h-screen bg-hero-home bg-cover bg-[80%_80%]">
			<HeaderShared/>
			{children}
		</div>
	)
}

export default DashboardLayout