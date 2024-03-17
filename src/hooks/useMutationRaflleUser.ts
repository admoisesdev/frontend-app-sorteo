import { addUserRaffle } from "@/services/raffleServices";
import { useMutation } from "@tanstack/react-query"

export const useMutationRaflleUser = () => {
  const addUserRaffleMutation = useMutation({
    // mutationFn: () => addUserRaffle(),
  });

  return {

  }
}
