import { loginAuth, registerAuth } from '@/lib/utils';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export const useTanStack = () => {
	const queryClient = useQueryClient();

	const query = useQuery({
		queryKey: ['auth'],
	});

	const loginMutation = useMutation({
		mutationFn: (user: LoginUser) => loginAuth(user),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['auth'] });
		},
	});

	const registerMutation = useMutation({
		mutationFn: (user: RegisterUser) => registerAuth(user),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['auth'] });
		},
	});

	return {
		query,
		loginMutation,
		registerMutation,
	};
};
