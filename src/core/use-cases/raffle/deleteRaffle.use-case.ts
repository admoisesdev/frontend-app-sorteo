import { HttpAdapter } from "@/config/adapters/http/http.adapter";
import { MessageResponse } from "@/infrastructure/interfaces/api.responses";

export const deleteRaffleUsecase = (fetcher: HttpAdapter, token: string, raffleId: string)
: Promise<MessageResponse> => {
	const messageResponse = fetcher.delete<MessageResponse>(`/raffle/${raffleId}`, {
		headers: {
			"Authorization": `Bearer ${token}`
		}
	});

	return messageResponse
}