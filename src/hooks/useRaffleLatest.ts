import { getRaffleLatest } from "@/services/raffleServices";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useRaffleLatest = () => {
	const queryRaffleLatest = useQuery<Raffle | AxiosError>({
		queryKey: ['raffles'],
		queryFn: getRaffleLatest,
	});

	return {
		queryRaffleLatest,
	};
};
