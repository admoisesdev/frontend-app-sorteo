import { helpHttp } from "@/utils/helpHttp";
import { AxiosError, AxiosResponse } from "axios";

export const loginAuth = async (user: User) => {
  const res = await helpHttp({
    url: "/auth/login",
    method: "POST",
    data: user,
  });

  if ((res as AxiosError).isAxiosError) {
    return(res as AxiosError);
  }


  return (res as AxiosResponse).data as LoginUser;
};

export const registerAuth = async (user: User) => {
    const res = await helpHttp({
      url: "/auth/register",
      method: "POST",
      data: user,
    });

    if ((res as AxiosError).isAxiosError) {

      return (res as AxiosError).response?.data;
    }

    return res;
};
