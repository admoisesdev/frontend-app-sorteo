import { useRaffles } from "@/hooks/useRaffles";
import { useRaffle } from "@/hooks/useRaffle";

import { TableHeaderRaffle } from "@/components/ui/TableHeaderRaffle";
import { Table, TableBody } from "@/components/ui/table";
import { TableItem } from "@/components/ui";
import { TableListVacio } from "@/components/ui";
import { Loader } from "@/components/ui/Loader";

interface AppProps { 
  onOpen: () => void;
  getRaffleId: (id: string) => void;

}

export const DataTable = ({ onOpen, getRaffleId }: AppProps) => {
  const { queryRaffles } = useRaffles();

  return (
    <Table>
      <TableHeaderRaffle />
      <TableBody>
        {!queryRaffles.isLoading ? (
          (queryRaffles.data as Raffle[]).length > 0 ? (
            (queryRaffles.data as Raffle[]).map((info: Raffle, i) => (
              <TableItem
                key={info.id}
                position={i}
                onOpen={onOpen}
                getIdRaffle={getRaffleId}
                {...info}
              />
            ))
          ) : (
            <TableListVacio />
          )
        ) : (
          <Loader />
        )}
      </TableBody>
    </Table>
  );
};
