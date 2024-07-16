'use client'

import Link from "next/link"

export const HeaderLinks = () => {
	return (
		<ul className="flex items-center gap-4">
			<li
				className="bg-blue-app-light-800 text-white
						px-4 py-2 rounded-sm">
				<Link
					href="/auth/login">
					Login
				</Link>
			</li>

			<li className="text-white border border-white 	
					px-4 py-2 rounded-sm">
				<Link
					href="/auth/register">
					Register
				</Link>
			</li>
		</ul>
	)
}
