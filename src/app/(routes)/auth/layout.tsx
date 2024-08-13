import { HeaderShared } from "@/app/_components/shared/header/HeaderShared";

const AuthLayout = ( { children }: Readonly<{ children: React.ReactNode }> ) => {
  return (
    <div className="w-full min-h-screen bg-hero-img bg-cover bg-[80%_80%] relative">
      <HeaderShared />
      <main className="flex items-center justify-center w-full min-h-[calc(100vh-10rem)]">
        { children }
      </main>
    </div>
  );
}

export default AuthLayout