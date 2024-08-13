export interface UserEntity{
	id: 						string,
	name: 					string,
	email: 					string,
	img?: 					string
	role: 					string[],
	password: 			string,
	emailValidated: boolean,
}