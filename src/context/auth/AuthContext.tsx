'use client';
import { createContext } from 'react';

interface AuthContextProps {
	isAuthenticated: boolean;
	user: User;
	login: (user: User) => void;
	logout: () => void;
	registerUser: (user: RegisterUser) => void;
	token: string;
	messageError: string | null;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export default AuthContext;
