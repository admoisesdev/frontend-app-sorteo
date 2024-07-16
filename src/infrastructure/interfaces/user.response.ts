import { UserEntity } from "@/core/entities/user.entity"

export interface AuthResponse {
  user: UserEntity
  token: string
};

export interface AuthResponseUser {
	token: string,
	username: string
	role: string[]
}