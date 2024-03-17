"use client";

import useAuth from "./useAuth";
import { getRaffles } from "@/services/raffleServices";

import { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";

export const useRaffles = () => {
  const { token } = useAuth();

  const queryRaffles = useQuery<Raffle[] | AxiosError>({
    queryKey: ["raffles", token],
    queryFn: () => getRaffles(token),
  });

  return {
    queryRaffles,
  };
};
