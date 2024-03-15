import axios, { AxiosError, AxiosResponse } from 'axios';

interface RequestOptions {
	url: string;
	method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
	data?: any;
	params?: any;
}

export const instance = axios.create({
	headers: {},
	withCredentials: true,
	baseURL: 'http://localhost:3000/api',
});

export const helpHttp = async ({
	url,
	method = 'GET',
	data = {},
	params = {},
}: RequestOptions): Promise<AxiosResponse> => {
	const headers = {
		'Content-Type': 'application/json',
	};

	try {
		const response = await instance({
			url,
			method,
			headers,
			params,
			data,
		});
		return response;
	} catch (error) {
		throw new Error((error as AxiosError).message);
	}
};
