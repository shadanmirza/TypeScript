import axios, { type AxiosResponse } from "axios";

export interface Todo {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export const fetchData = async (): Promise<Todo> => {
    const response: AxiosResponse<Todo> = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
    return response.data;
}
