import Link from "next/link";
import useAuth from "@/hooks/useAuth";

import { ROLES } from "@/utils/utils";

import { NavButton } from "./NavButton";

interface AppProps {
  pathLogout?: string;
}

export const Header = ({ pathLogout = "/" }: AppProps) => {
  const { isAuthenticated,user } = useAuth();

  return (
    <header className="w-full h-18 p-4 md:pb-0">
      <nav className="w-full h-full flex items-center justify-between">
        <Link
          className="text-2xl uppercase text-white font-bold"
          href={
            isAuthenticated && user && user.role.includes(ROLES.ADMIN)
              ? "/sorteos"
              : "/"
          }
        >
          Sorteo
        </Link>

        {isAuthenticated ? (
          <NavButton pathLogout={pathLogout} />
        ) : (
          <div className="flex items-center gap-4 text-white text-lg">
            <Link
              href="/auth/login"
              className="px-4 py-1 bg-blue-app-400 rounded-md border-[2px] border-transparent"
            >
              Login
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};
