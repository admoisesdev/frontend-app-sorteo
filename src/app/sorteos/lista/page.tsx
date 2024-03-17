"use client";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

import { useEffect } from "react";
import useAuth from "@/hooks/useAuth";
import { useModal } from "@/hooks/useModal";
import { ROLES } from "@/utils/utils";

import { RaffleModal } from "@/components/ui/RaffleModal";
import SorteosContainer from "@/components/ui/SorteosContainer";
import { DataTable } from "@/components/ui/DataTable";
import { useRaffle } from "@/hooks/useRaffle";
import Link from "next/link";
import { Plus } from "lucide-react";

const Lista = () => {
  const router = useRouter();
  const { isAuthenticated, user } = useAuth();
  const { isOpen, onOpen, onClose } = useModal();
  const { queryRaffle, getRaffleId } = useRaffle();

  useEffect(() => {
    if (!isAuthenticated || !user.role.includes(ROLES.ADMIN)) router.push("/");
  }, [isAuthenticated, router, user]);

  return (
    <SorteosContainer moreClass="bg-hero-sorteos bg-cover bg-[80%_80%]">
      <main className="pt-4 w-full min-h-[100vh_-_10rem] flex flex-col items-center px-2">
        <section className="w-full h-full lg:w-[80%] p-4 flex flex-col gap-8 bg-blue-dark-app-500">
          <div className="flex justify-between items-center">
            <h2 className="text-lg md:text-3xl text-white">Lista de sorteos</h2>
            <Link
              className="flex items-center gap-1 text-lg md:text-xl text-white hover:text-gray-200 transition-colors"
              href="/sorteos/crear"
            >
              <Plus size="1rem" />
              Crear sorteo
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
