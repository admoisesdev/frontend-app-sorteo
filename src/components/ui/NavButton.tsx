import { useRouter } from "next/navigation";

import { useState } from "react";
import useAuth from "@/hooks/useAuth";

import { ArrowBotton, ArrowRight, Logout } from "@/components/icons";

const initialOpenMenu = false;

interface AppProps {
  pathLogout?: string;
}

export const NavButton = ({ pathLogout = "/" }: AppProps) => {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(initialOpenMenu);
  const { logout, user } = useAuth();
  return (
    <div
      className='bg-purple-app-400 relative w-[10rem] h-[3rem] border-l-transparent before:content-[""] before:absolute before:w-0 before:h-0 before:border-t-[1.5rem] before:border-t-transparent before:border-b-[1.5rem] before:border-b-transparent  before:border-r-[2rem] before:border-r-purple-app-400 before:left-[-2rem] pl-5 flex items-center gap-2 text-white shadow-md cursor-pointer'
      onClick={() => setOpenMenu(!openMenu)}
    >
      <span>{user.name}</span>{" "}
      <div>{openMenu ? <ArrowBotton /> : <ArrowRight />}</div>
      <ul
        className={`absolute bg-purple-app-400 w-[8rem] h-[3rem] top-[3rem] right-0 rounded-t-none transition-all duration-200 rounded-md ${
          openMenu
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible translate-y-10"
        }`}
      >
        <li className="w-full h-12 p-2 hover:bg-violet-600 rounded-md rounded-t-none transition-colors duration-300">
          <button
            className="w-full h-full text-sm flex items-center gap-2"
            onClick={() => {
              logout();
              router.push(pathLogout);
            }}
          >
            <Logout />
            Cerrar sesión
          </button>
        </li>
      </ul>
    </div>
  );
};
