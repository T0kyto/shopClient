import {$host} from "./index";

export const login = async (phone: string, password: string) => {
    const {data} = await $host.post('/login', {phone, password})
    return data
}