import { instance as api } from "../../lib/api";

const getOrders = async (role ,email) => {
    const {data} = await api.get(`/${role}/${email}/order`)
    return data
}

export default getOrders; 