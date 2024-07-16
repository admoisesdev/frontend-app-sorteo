import { HttpAdapter } from "@/config/adapters/http/http.adapter";
import { MessageResponse } from "@/infrastructure/interfaces/api.responses";

interface Props {
	token: string,
	raffleId: string
	fetcher: HttpAdapter,
	body: Record<string,string>,
}

export const editRaffleUsecase = async ({token,raffleId,fetcher,body}: Props)
: Promise<MessageResponse> => {
	const messageResponse = await fetcher.put<MessageResponse>(`/raffle/${raffleId}`, body, {
		headers: {
			Authorization: `Bearer ${token}`
		}
	})
	return messageResponse
}