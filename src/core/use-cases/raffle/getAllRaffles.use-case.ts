import { HttpAdapter } from "@/config/adapters/http/http.adapter";
import { RaffleEntity } from "@/core/entities/raffle.entity";

export const getAllRafflesUseCase = async (fetcher: HttpAdapter,token: string): Promise<RaffleEntity[]> => {
	const raffles = await fetcher.get<RaffleEntity[]>("/raffle", {
		headers: {
			Authorization: `Bearer ${token}`
		}
	});

	return raffles
}