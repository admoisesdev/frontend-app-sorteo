interface LoginUser {
	email: string;
	password: string;
}

interface RegisterUser extends LoginUser {
	name: string;
}
