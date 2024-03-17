import useAuth from "./useAuth";
import { toggleUserWinner } from "@/services/raffleServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

const initialUserId = "";

export const useMutationWinner = (raffleId: string) => {
  const [userId, setUserId] = useState(initialUserId);
  const { token } = useAuth();

  const queryClient = useQueryClient();

  const winnerMutation = useMutation({
    mutationFn: () => toggleUserWinner(raffleId, userId, token),
    onSuccess: (data) => {
     console.log(data);

      queryClient.invalidateQueries({
        predicate: (query) => query.queryKey[0] === "raffle",
      });

      
    }
  });

  const getRaffleUserId = (id: string) => {
    setUserId(id);
  };

  return {
    winnerMutation,
    getRaffleUserId,
  };
}