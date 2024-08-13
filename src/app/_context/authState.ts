'use client'

import { AuthResponseUser } from '@/infrastructure/interfaces/user.response';
import { create } from 'zustand'

interface AuthState {
	user: AuthResponseUser | null,
	messageError: string | null,
	messageSuccess: string | null,
	isOpenModalConfirm: boolean,

	setUser: (user: AuthResponseUser | null) => void
	setMessageError: (messageError: string | null) => void
	setMessageSuccess: (messageSuccess: string | null) => void,
	onLogout: () => void
	setModalConfirm: (isOpen: boolean) => void
}

const storageData = typeof window != 'undefined' 
	? JSON.parse(localStorage.getItem('user')!) 
	: null

export const authStore = create<AuthState>()((set) => ({
	user: storageData,
	messageError: null,
	messageSuccess: null,
	isOpenModalConfirm: false,

	// Actions
	setUser: (user) => set({ user }),
	setMessageError: (messageError) => set({ messageError }),
	setMessageSuccess: (messageSuccess) => set({ messageSuccess }),
	onLogout: () => {
		localStorage.removeItem('user');
		set({ user: null });
	},
	setModalConfirm: (isOpen) => {
		set({ isOpenModalConfirm: isOpen })
	},
}));
