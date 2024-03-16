type AuthError = { error: string };

interface TableInfo {
	id: number;
	title: string;
	description: string;
}

interface Prize {
	name: string;
	description: string;
	active: boolean;
	id: string;
}

interface RaffleCreate {
	name: string;
	description: string;
	endAt: string;
	prize: string;
	createAt?: string;
}

interface Raffle {
	name: string;
	description: string;
	endAt: Date;
	active: true;
	prize: Prize[] | Prize | string;
	users: User[];
	createAt: string;
	id: string;
}

interface User {
	id: string;
	name: string;
	email: string;
	emailValidated: boolean;
	role: string[];
}

interface LoginUser {
	user: User;
	token: string;
}

interface RegisterUser extends User {
	password: string;
}

interface CreateParams {
	raffle: Raffle;
	token: string;
}

interface UpdateParams {
	id: string;
	raffle: Raffle;
	token: string;
}

interface DeleteParams {
	id: string;
	token: string;
}
