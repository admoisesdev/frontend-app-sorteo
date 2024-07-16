import { PrizeEntity } from "./prize.entity"
import { UserEntity } from "./user.entity"

export interface RaffleEntity {
	id: 					string
	name: 				string
	prize:				PrizeEntity
	users: 				UserEntity[]
	winner: 			UserEntity
	active: 			boolean
	description: 	string
	createAt: 		Date
	endAt:				Date 
}