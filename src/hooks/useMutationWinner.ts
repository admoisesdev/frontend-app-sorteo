import useAuth from "./useAuth";
import { toggleUserWinner } from "@/services/raffleServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";

const initialUserId = "";

export const useMutationWinner = (raffle: Raffle) => {
  const [userId, setUserId] = useState(initialUserId);
  const { token } = useAuth();

  const queryClient = useQueryClient();

  const winnerMutation = useMutation({
    mutationFn: () => toggleUserWinner(raffle.id, userId, token),
    onSuccess: (data) => {
      const winnerUser = data as Winner;
      const winnerRaffle = raffle.users.find((user) => user.id === winnerUser.userId);
      
      if (winnerUser.winner) {
        toast.success(`${winnerRaffle?.name} ha ganado el sorteo`);
      }

      queryClient.invalidateQueries({
        predicate: (query) => query.queryKey[0] === "raffle",
      });
    },
  });

  const getRaffleUserId = (id: string) => {
    setUserId(id);
  };

  return {
    winnerMutation,
    getRaffleUserId,
  };
};