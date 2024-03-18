import { useState } from 'react';
import useAuth from './useAuth';

import {
  createRaffle,
	deleteRaffle,
	updateRaffle,
} from '@/services/raffleServices';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';


const initialDateError = {} as RequestError;

export const useMutationRaffle = () => {
  const router = useRouter();
	const { token } = useAuth();
	const [dateError, setDateError] = useState<RequestError>(initialDateError);

	const queryClient = useQueryClient();

	const mutationCreate = useMutation({
		mutationFn: (raffle: RaffleCreate) => {
			return createRaffle(raffle, token);
    },
		onSuccess: (raffle) => {
			const raffleError = raffle as AxiosError;
      const messageError = raffleError.response?.data as RequestError;

			if (raffleError.response?.status === 400) {
        setDateError(messageError);
      } else {
        toast.success("El sorteo se ha creado exitosamente.");

        queryClient.invalidateQueries({
          predicate: (query) => query.queryKey[0] === "raffles",
        });

        setTimeout(() => {
          router.push("/sorteos/lista");
        }, 3000);
      }

		},
	});

	const mutationUpdate = useMutation({
		mutationFn: ({ id, raffle }: { id: string; raffle: RaffleCreate }) => {
			return updateRaffle(id, raffle, token);
    },
    onSuccess: (raffle) => {
      const raffleError = raffle as AxiosError;
      const messageError = raffleError.response?.data as RequestError;
      console.log(messageError);

      if (raffleError.response?.status === 400) {
        setDateError(messageError);
      } else {
        toast.success("El sorteo se ha actualizado exitosamente.");

        queryClient.invalidateQueries({
          predicate: (query) => query.queryKey[0] === "raffles",
        });

        setTimeout(() => {
          router.push("/sorteos/lista");
        }, 3000);
      }

			
		},
	});

	const mutationDelete = useMutation({
		mutationFn: (id: string) => {
			return deleteRaffle(id, token);
    },
    onMutate: () => {
      toast.success("El sorteo se ha eliminado exitosamente.");
    },
		onSuccess: () => {
			queryClient.invalidateQueries({
				predicate: (query) => query.queryKey[0] === 'raffles',
			});
		},
	});

	return {
		dateError,
		mutationCreate,
		mutationUpdate,
		mutationDelete,
	};
};
