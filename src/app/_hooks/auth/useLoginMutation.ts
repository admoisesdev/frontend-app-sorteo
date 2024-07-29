import { authStore } from "@/app/_context/authState"
import { apiFetcher } from "@/config/adapters/api.adapter"
import { loginUserUseCase } from "@/core/use-cases/auth"
import { useMutation } from "@tanstack/react-query"
import { useLocalStorage } from 'usehooks-ts'

export const useLoginMutation = () => {
	const {setUser, setMessageError} = authStore()
	const [userStorage,setUserStorage] = useLocalStorage('user', {})

	const loginMutation = useMutation({
		mutationKey: ["login"],
		mutationFn: (body: Record<string,string>) => {
			return loginUserUseCase(apiFetcher,body) //llamada a la api 
		},
		onSuccess: (data) => {
			setUser(data)
			setUserStorage(data)
			setMessageError(null)
		},
		onError: (error) => {
			setMessageError(error.message)
		}
	})

	return {
		loginMutation,
	}
}
