import { authStore } from "@/app/_context/authState"
import { apiFetcher } from "@/config/adapters/api.adapter"
import { registerUserUseCase } from "@/core/use-cases/auth"
import { useMutation } from "@tanstack/react-query"

export const useRegisterMutation = () => {
	
	const {setMessageSuccess,setMessageError,setModalConfirm} = authStore();
	
	const registerMutation = useMutation({
		mutationKey: ["register"],
		mutationFn: (body: Record<string,string>) => {
			return registerUserUseCase(apiFetcher,body)
		},
		onSuccess: (data) => {
			setMessageSuccess(data.message)
			setMessageError(null)
			setModalConfirm(true)
		},
		onError: (error) => {
			setMessageError(error.message)
			setMessageSuccess(null)
			setModalConfirm(false)
		}
	})

	return {
		registerMutation
	}
}
