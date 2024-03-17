import useAuth from "./useAuth";
import { useRaffleLatest } from "./useRaffleLatest";

import { addUserRaffle } from "@/services/raffleServices";
import { ROLES } from "@/utils/utils";

import { useMutation } from "@tanstack/react-query"

export const useMutationParticipate = () => {
  const { token, user } = useAuth();
  const { queryRaffleLatest } = useRaffleLatest();
  
  const { data: raffle } = queryRaffleLatest;

  const participeMutation = useMutation({
    mutationFn: () => addUserRaffle((raffle as Raffle).id, token),
    onSuccess: (raffle) => {
      console.log(raffle);
    },
  });

  const handleParticipate = () => {
    if (user.role.includes(ROLES.USER)) {
      participeMutation.mutate();
    }
  };

  return {
    participeMutation,
    handleParticipate,
  };
}
