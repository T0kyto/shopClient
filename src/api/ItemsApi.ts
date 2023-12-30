import {IItem} from "../store/ItemsStore";
import {$host} from "./index";

export const getItems = async (token: string, page: number, pageSize: number)=>{

    let data = JSON.stringify({
        "page": page,
        "pageSize": pageSize
    });

    const items = await $host.post("/items", data, {
        headers: {
            'Content-Type': 'application/json', // Указываем тип содержимого
            'Authorization': `Bearer ${token}`
        }
    });

    return items.data.items
}