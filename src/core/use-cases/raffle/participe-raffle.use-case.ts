import { HttpAdapter } from "@/config/adapters/http/http.adapter";
import { MessageResponse } from "@/infrastructure/interfaces/api.responses";

export const participateRaffleUsecase = async (fetcher: HttpAdapter,token: string,raffleId: string)
:Promise<MessageResponse> => {
	const messageResponse = await fetcher.post<MessageResponse>(
		`/raffle/users/${raffleId}`,
		{},
		{},
		token
	);
	
	return messageResponse
}