import {$host, $authHost} from "./index";
// import jwtDecode from "jwt-decode";

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}
export const createBrand = async (brand) => {
    const {data} = await $authHost.post('api/brand', brand)
    return data
}

export const fetchBrands = async () => {
    const {data} = await $host.get('api/brand')
    return data
}
export const createClothing = async (clothing) => {
    const {data} = await $authHost.post('api/clothing', clothing)
    return data
}

export const fetchClothings = async () => {
    const {data} = await $host.get('api/clothing')
    return data
}
export const fetchOneClothings = async (id) => {
    const {data} = await $host.get('api/clothing/' + id)
    return data
}
export const addToBasket = async (clothingId) => {
    const {response} = await $authHost.post('api/basket', clothingId)
    return response
}

export const getBasket = async () => {
    const {data} = await $authHost.get('api/basket')
    return data
}