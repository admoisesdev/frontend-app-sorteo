'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";

import { ChevronDownIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { ProfileMenu } from "./ProfileMenu";
import { TypographyP } from "../typography";

export const HeaderProfile = () => {
  const router = useRouter();
	const [openMenu, setOpenMenu] = useState(false);

	const handleLogout = () => {
		router.push("/");
	} 

	return (
		<div
      className='header-profile-menu'
      onClick={() => setOpenMenu(!openMenu)}
    >
      <TypographyP>Justin</TypographyP>
      
      {
        openMenu 
        ? <ChevronDownIcon /> 
        : <ChevronRightIcon />
      }

      <ProfileMenu
        openMenu={openMenu}
        onLogout={handleLogout}/>
    </div>
	)
}
