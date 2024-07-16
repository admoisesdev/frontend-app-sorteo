import { AuthResponse, AuthResponseUser } from "../interfaces/user.response";

export class AuthMapper{
  static fromAuthResponseToUser(response: AuthResponse): AuthResponseUser{
    return {
      token: response.token,
      username: response.user.name,
      role: response.user.role
    };
  }
}