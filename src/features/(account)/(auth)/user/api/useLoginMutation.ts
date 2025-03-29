// @features/auth/api/useLoginMutation.ts
import { useMutation } from '@tanstack/react-query'
import api from '@/lib/axios'



export function useLoginMutation() {
  return useMutation({
    mutationFn: async ({ email, password }: LoginInput) => {
      const response = await api.post('/api/user/login', {
        email,
        password,
      });
      return response.data; // message, logged_in_user, access_token, refresh_token
    },
  });
}
