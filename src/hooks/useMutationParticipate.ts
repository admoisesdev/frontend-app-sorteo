import { useState } from "react";

import useAuth from "./useAuth";
import { useRaffleLatest } from "./useRaffleLatest";

import { addUserRaffle } from "@/services/raffleServices";
import { ROLES } from "@/utils/utils";

import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

const initialParticipateError = {} as RequestError;

export const useMutationParticipate = () => {
  const { token, user } = useAuth();
  const { queryRaffleLatest } = useRaffleLatest();

  const { data: raffle } = queryRaffleLatest;

  const participeMutation = useMutation({
    mutationFn: () => addUserRaffle((raffle as Raffle).id, token),
    onSuccess: (data) => {
      const dataError = data as AxiosError;
      const messageError = dataError.response?.data as RequestError;

      if (dataError.response?.status === 400) {
        toast(messageError.error, {
          style: { backgroundColor: "#FFC327", color: "#20315C" },
        });
      } else {
        toast.success("Te has inscrito exitosamente al sorteo.")
      }
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
};
