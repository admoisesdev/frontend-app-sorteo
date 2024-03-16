import Link from "next/link";
import useAuth from "@/hooks/useAuth";
import { LogoutButton } from "./ui/LogoutButton";

interface AppProps{
  pathLogout?: string

}

export const Header = ({ pathLogout = "/" }: AppProps) => {
  const { isAuthenticated } = useAuth();

  return (
    <header className="w-full h-20 p-4">
      <nav className="w-full h-full flex items-center justify-between">
        <Link className="text-2xl uppercase text-white font-bold" href="/">Sorteo</Link>

        {isAuthenticated ? (
          <LogoutButton pathLogout={pathLogout} />
        ) : (
          <div className="flex items-center gap-4 text-white text-lg">
            <Link
              href="/auth/login"
              className="px-4 py-1 bg-blue-app-400 rounded-md border-[2px] border-transparent"
            >
              Login
            </Link>

            <Link
              href="/auth/register"
              className="px-4 py-1 border-[2px] rounded-md"
            >
              Register
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};
