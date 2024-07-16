import { AuthResponse, AuthResponseUser } from "@/infrastructure/interfaces/user.response";
import { HttpAdapter } from "@/config/adapters/http/http.adapter";
import { AuthMapper } from "@/infrastructure/mappers/auth.mapper";

export const loginUserUseCase = async (fetcher: HttpAdapter,body: Record<string,string>): 
Promise<AuthResponseUser> => {
  const login = await fetcher.post<AuthResponse>("/auth/login", body);
  return AuthMapper.fromAuthResponseToUser(login);
}