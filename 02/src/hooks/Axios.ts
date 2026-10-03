import axios from "axios";
import type {AxiosResponse} from "axios";

interface Todo {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const fetchData = async () => {
    try {
        const response: AxiosResponse<Todo> = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
        console.log("Todo", response.data);
         
    } catch (error: any) {
        if (axios.isAxiosError(error)){
            console.log("Axios Error", error.message);
            if(error.response){
                console.log(error.response.status);
                console.log(error.response.data);
                
            }
        }
    }
}

export const data = fetchData