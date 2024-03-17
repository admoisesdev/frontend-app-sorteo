"use client";
import dynamic from "next/dynamic";

import { useRaffleLatest } from '@/hooks/useRaffleLatest';

import { Header } from "@/components/ui/Header";
import { Presentacion } from '@/components/ui/Presentacion';

function Home() {
  const { queryRaffleLatest } = useRaffleLatest();

  return (
    <div className='w-full min-h-screen bg-hero-home bg-cover bg-[50%_50%]'>
      <div className='w-full h-full backdrop-blur-sm bg-opacity-40 bg-black'>
        <Header pathLogout="/auth/login" />
        
        <main className='w-full min-h-[calc(100vh_-_5rem)] pb-4 lg:p-0'>
          <Presentacion raffle={queryRaffleLatest.data as Raffle} />
        </main>
      </div>
    </div>
  );
}

export default dynamic(async () => Home, { ssr: false });
