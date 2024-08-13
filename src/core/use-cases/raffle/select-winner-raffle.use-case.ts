import { HttpAdapter } from "@/config/adapters/http/http.adapter"
import { MessageResponse } from "@/infrastructure/interfaces/api.responses"

interface Props {
	raffleId: string
	userId: string
	fetcher: HttpAdapter
	token: string
}

export const SelectWinnerRaffleUseCase = async ({fetcher, raffleId, userId,token}:Props)
:Promise<MessageResponse> => {
	const winnerMessag = await fetcher.put<MessageResponse>(
		`/raffle/winner/${raffleId}/${userId}`,
		{},
		{},
		token
	);
	return winnerMessag
}