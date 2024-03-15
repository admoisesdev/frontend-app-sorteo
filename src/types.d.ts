type AuthError = { error: string }

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
