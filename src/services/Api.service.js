import { create } from "apisauce";

const api = create({
    baseURL: process.env.REACT_APP_RAPIDAPI_URL,
    headers: {
        Accept: 'application/json',
        'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
        'X-RapidAPI-Host': process.env.REACT_APP_RAPIDAPI_HOST
    }
});

export const ApiService = {
    get,
}