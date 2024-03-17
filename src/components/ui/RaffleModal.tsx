import { useMutationWinner } from "@/hooks/useMutationWinner";
import { formatDate } from "../../utils/utils";

import { Table, TableBody, TableCell, TableRow } from ".";
import { CloseIcon } from "../icons";

interface AppProps {
  isOpen: boolean;
  onClose: () => void;
  raffle: Raffle;
}

export const RaffleModal = ({ isOpen, onClose, raffle }: AppProps) => {
  const { winnerMutation, getRaffleUserId } = useMutationWinner(raffle);
  return (
    <div
      className={`fixed top-0 w-full flex items-center justify-center bg-black/40 z-50 backdrop-blur-md py-16 lg:py-0 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <button
        className="absolute top-4 right-4 cursor-pointer"
        onClick={onClose}
      >
        <CloseIcon />
      </button>

      <div className="grid grid-cols-[repeat(1,100%)] sm:grid-cols-[repeat(1,80%)] md:grid-cols-[repeat(2,50%)] lg:grid-cols-[repeat(2,25rem)] gap-4 place-items-center justify-center w-[90%] lg:w-full min-h-screen">
        <article className="bg-gradient-to-r from-[#CBC7FF] to-[#C5D8FF] w-full p-4 rounded-sm flex flex-col gap-4 min-h-[510px]">
          <h2 className="text-center text-2xl text-blue-dark-app-900">
            {raffle?.name}
          </h2>
          <div className="flex flex-col gap-3">
            <h3 className="text-lg text-blue-dark-app-900">
              Descripción del sorteo
            </h3>
            <p className="bg-blue-dark-app-500 text-white p-2 rounded-md">
              {raffle?.description}
            </p>
          </div>
          <div className="flex flex-col gap-3 text-blue-dark-app-900">
            <h3 className="text-lg">Descripción del premio</h3>
            <div className="flex flex-col gap-2 bg-gradient-to-r from-[#FFC327] to-[#FFF500] p-2 rounded-md">
              <h4 className="text-center text-xl">{raffle?.prize.name}</h4>
              <p>{raffle?.prize.description}</p>
            </div>
          </div>

          <section className="flex gap-4">
            <div className="flex-1">
              <h3 className="text-lg mb-2">Fecha de inicio</h3>
              <p className="bg-blue-dark-app-500 text-white p-2 rounded-md border-r-4 border-r-blue-app-400">
                {formatDate(raffle?.createAt)}
              </p>
            </div>

            <div className="flex-1">
              <h3 className="text-lg mb-2">Fecha de termino</h3>
              <p className="bg-blue-dark-app-500 text-white p-2 rounded-md border-r-4 border-r-blue-app-400">
                {formatDate(raffle?.endAt)}
              </p>
            </div>
          </section>
        </article>

        <article className="bg-gradient-to-r from-[#CBC7FF] to-[#C5D8FF] w-full p-4 rounded-sm h-[510px] flex flex-col gap-5 overflow-hidden">
          <h2 className="text-center text-2xl text-blue-dark-app-900">
            Elegir Ganador
          </h2>

          <div className="flex flex-col gap-5 overflow-y-scroll">
            <h3 className="text-lg text-blue-dark-app-900">
              Lista de participantes
            </h3>

            <Table>
              <TableBody>
                {raffle?.users.length > 0 ? (
                  raffle?.users.map((user) => (
                    <TableRow
                      key={user.id}
                      className="bg-[#424C70] transition-colors duration-200"
                    >
                      <TableCell className="text-center border-l-4 border-l-blue-app-400 text-lg p-1 px-4">
                        {user.name}
                      </TableCell>
                      <TableCell
                        className={`${
                          user.id === raffle?.winner
                            ? "bg-green-600"
                            : "bg-blue-400"
                        } text-center text-lg p-1 px-4 cursor-pointer`}
                      >
                        <button
                          onClick={() => {
                            getRaffleUserId(user.id);
                            winnerMutation.mutate();
                          }}
                        >
                          {user.id === raffle?.winner ? "Ganador" : "Elegir"}
                        </button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow className="bg-[#424C70] transition-colors duration-200">
                    <TableCell className="text-center text-lg p-1 px-4">
                      No hay participantes
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </article>
      </div>
    </div>
  );
};
