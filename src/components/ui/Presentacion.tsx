import { useMutationParticipate } from "@/hooks/useMutationParticipate";
import useAuth from "@/hooks/useAuth";
import { ROLES, formatDate } from "@/utils/utils";

import { CardBgGrid } from "./CardBgGrid";
import { CardInfoWithBg } from "./CardInfoWithBg";
import { FechaItem } from "./FechaItem";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface AppProps {
  raffle: Raffle;
}

export const Presentacion = ({ raffle }: AppProps) => {
  const { user, isAuthenticated } = useAuth();
  const { handleParticipate } = useMutationParticipate();

  return (
    <section className="w-[90%] flex justify-center flex-col gap-8 items-center mx-auto">
      <div className="w-full sm:w-[25rem]">
        <header className="bg-gradient-to-l rounded-md from-[#FFC327] to-[#FFF500] p-1 rounded-b-none">
          <h2 className="text-xl text-center text-blue-app-800">
            {raffle?.name}
          </h2>
        </header>
        <CardInfoWithBg
          title="Premio"
          description={raffle?.prize.name}
          classNameDescription="font-bold text-lg text-center"
        />
      </div>

      <div className="flex gap-4 w-full flex-col sm:w-[25rem] lg:flex-row lg:w-[50rem]">
        <CardInfoWithBg
          title="Descripción del sorteo"
          description={raffle?.description}
        />
        <CardInfoWithBg
          title="Descripción del premio"
          description={raffle?.prize.description}
        />
      </div>

      <div className="w-full sm:w-[25rem]">
        <header className="bg-gradient-to-r rounded-md from-[#356EFF] to-[#CC5FFF] p-1 rounded-b-none">
          <h2 className="text-xl text-center text-white">Fecha del sorteo</h2>
        </header>
        <CardBgGrid>
          <FechaItem
            title="Fecha inicio"
            description={formatDate(raffle?.createAt)}
          />
          <FechaItem
            title="Fecha Finalización"
            description={formatDate(raffle?.endAt)}
          />
        </CardBgGrid>
      </div>

      {!isAuthenticated || user.role.includes(ROLES.ADMIN) ? (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <button
                className={`bg-gradient-to-l rounded-md from-[#FFC327] to-[#FFF500] hover:from-[#FFF500] hover:to-[#FFC327] px-4 py-2 text-2xl transition-all ${
                  !isAuthenticated || user.role.includes(ROLES.ADMIN)
                    ? "cursor-not-allowed pointer-events-none disabled:opacity-50"
                    : "cursor-pointer pointer-events-auto"
                }`}
                disabled={!isAuthenticated || user.role.includes(ROLES.ADMIN)}
              >
                Participar
              </button>
            </TooltipTrigger>
            <TooltipContent className="">
              <p>Debes autenticarte para participar</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ) : (
        <button
          onClick={handleParticipate}
          className={`bg-gradient-to-l rounded-md from-[#FFC327] to-[#FFF500] hover:from-[#FFF500] hover:to-[#FFC327] px-4 py-2 text-2xl transition-all ${
            !isAuthenticated || user.role.includes(ROLES.ADMIN)
              ? "cursor-not-allowed pointer-events-none disabled:opacity-50"
              : "cursor-pointer pointer-events-auto"
          }`}
          disabled={!isAuthenticated || user.role.includes(ROLES.ADMIN)}
        >
          Participar
        </button>
      )}
    </section>
  );
};
