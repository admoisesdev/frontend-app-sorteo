"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

import { Header } from "@/components/Header";

function Home() {
  return (
    <div className="w-full h-screen bg-hero-home bg-cover bg-[50%_50%]">
      <div className="flex flex-col justify-center items-center w-full h-screen backdrop-blur-sm bg-opacity-40 bg-black">
        <Header pathLogout="/auth/login" />

        <main className="w-3/6 min-h-[calc(100vh_-_5rem)] flex items-center justify-center relative">
          <div className="sm:w-full flex items-center justify-center">
            <Image
              src="/vector.png"
              className=""
              width={400}
              height={400}
              alt="arrows"
            />
            <Link
              href="/auth/login"
              className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-blue-app-800 rounded-lg text-white p-2 text-4xl"
            >
              Participar
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}

export default dynamic(async () => Home, { ssr: false });
