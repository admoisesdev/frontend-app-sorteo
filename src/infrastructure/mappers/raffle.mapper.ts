import { RaffleEntity } from "@/core/entities/raffle.entity";

export class RaffleMapper {
	static fromFullRaffleToEntity(fullRaffle: RaffleEntity): RaffleEntity {
		return {
			id: fullRaffle.id,
			description: fullRaffle.description,
			createAt: fullRaffle.createAt,
			endAt: fullRaffle.endAt,
			name: fullRaffle.name,
			users: fullRaffle.users,
			active: fullRaffle.active,
			prize: fullRaffle.prize,
			winner: fullRaffle.winner,
		}
	}
}