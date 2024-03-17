"use client";
import dynamic from "next/dynamic";
import { useModal } from "@/hooks/useModal";

import { RaffleModal } from "@/components/ui/RaffleModal";
import SorteosContainer from "@/components/ui/SorteosContainer";
import { DataTable } from "@/components/ui/DataTable";
import { useRaffle } from "@/hooks/useRaffle";
import Link from "next/link";
import { Plus } from "lucide-react";

const Lista = () => {
  const { isOpen, onOpen, onClose } = useModal();
  const { queryRaffle, getRaffleId } = useRaffle();

  return (
    <SorteosContainer moreClass="bg-hero-sorteos bg-cover bg-[80%_80%]">
      <main className="w-full min-h-[100vh_-_10rem] flex flex-col items-center px-2">
        <section className="w-full h-full lg:w-[80%] p-4 flex flex-col gap-8 bg-blue-dark-app-500">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl text-white">Lista de sorteos</h2>
            <Link
              className="flex items-center gap-2 text-xl text-white"
              href="/sorteos/crear"
            >
              <Plus /> Crear sorteo
            </Link>
          </div>

          <DataTable onOpen={onOpen} getRaffleId={getRaffleId} />
        </section>
      </main>

      {isOpen && (
        <RaffleModal
          raffle={queryRaffle.data as Raffle}
          isOpen={isOpen}
          onClose={onClose}
        />
      )}
    </SorteosContainer>
  );
};

export default dynamic(async () => Lista, { ssr: false });
