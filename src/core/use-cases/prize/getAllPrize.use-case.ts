import { HttpAdapter } from "@/config/adapters/http/http.adapter";
import { PrizeEntity } from "@/core/entities/prize.entity";

export const getAllPrizeUsecase = async (fetcher: HttpAdapter,token: string): 
Promise<PrizeEntity[]> => {
	const prizes = await fetcher.get<PrizeEntity[]>("/prize", {
		headers: {
			Authorization: `Bearer ${token}`
		}
	});

	return prizes
}