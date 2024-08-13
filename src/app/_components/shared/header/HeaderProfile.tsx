'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";

import { ChevronDownIcon, ChevronRightIcon } from "@radix-ui/react-icons";

import { ProfileMenu } from "./ProfileMenu";
import { TypographyP } from "../typography";
import { Formatter } from '../../../../config/helpers';

interface Props {
  onLogout: () => void 
  username: string
}

export const HeaderProfile = ({onLogout,username}: Props) => {
	const [openMenu, setOpenMenu] = useState(false);
  const router = useRouter();

	const handleLogout = () => {
		router.push("/");
    onLogout();
	} 

	return (
		<div
      className='header-profile-menu'
      onClick={() => setOpenMenu(!openMenu)}
    >
      <TypographyP>{Formatter.capitalizeFirstLetter(username)}</TypographyP>
      
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
