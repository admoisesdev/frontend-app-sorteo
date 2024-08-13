import { HttpAdapter } from "@/config/adapters/http/http.adapter";
import { RaffleEntity } from "@/core/entities/raffle.entity";
import { RaffleMapper } from "@/infrastructure/mappers/raffle.mapper";

export const getRaffleLatestUsecase = async (fetcher: HttpAdapter,token:string): 
Promise<RaffleEntity> => {
	const raffle = await fetcher.get<RaffleEntity>(`/raffle/latest`, {},token);
	return RaffleMapper.fromFullRaffleToEntity(raffle);
}