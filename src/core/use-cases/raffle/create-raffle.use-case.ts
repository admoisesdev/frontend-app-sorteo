import { HttpAdapter } from "@/config/adapters/http/http.adapter";
import { MessageResponse } from "@/infrastructure/interfaces/api.responses";

export const createRaffleUsecase = async (fetcher: HttpAdapter,body: Record<string,unknown>, token: string): Promise<MessageResponse> => {
	const messageResponse = await fetcher.post<MessageResponse>("/raffle", body,{},token)
	return messageResponse
}