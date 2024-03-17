'use client';

import { useState } from 'react';
import useAuth from './useAuth';
import { getRaffle } from '@/services/raffleServices';

import { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';

const initialRaffleId = "";

export const useRaffle = (id?: string) => {
  const [raffleId, setIdRaffle] = useState(initialRaffleId);
  const { token } = useAuth();
  


	const queryRaffle = useQuery<Raffle | AxiosError>({
    queryKey: ["raffles", { raffleId: id ? id : raffleId, token }],
    queryFn: () => getRaffle(id ? id : raffleId, token),
  });
  
  const getRaffleId = (id: string) => {
    setIdRaffle(id);
  };

	return {
    queryRaffle,
    getRaffleId,
  };
};
