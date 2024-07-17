import { HttpAdapter } from "@/config/adapters/http/http.adapter";
import { RaffleEntity } from "@/core/entities/raffle.entity";

export const getRaffleByIdUsecase = async (fetcher: HttpAdapter,token:string,id: string): 
Promise<RaffleEntity> => {
	const raffle = await fetcher.get<RaffleEntity>(`/raffle/${id}`, {},token);
	return raffle;
}