import axios from "axios"
import { NewsACategoria, NewsApiResponse, ParamsType } from "../interface"

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL
const API_KEY = import.meta.env.VITE_NEWS_API_KEY




export const getCategories = async ():Promise<NewsACategoria> => {
    try {
        const response = await axios.get<NewsACategoria>(`${BASE_URL}available/categories`, {
            params: {
                apiKey: API_KEY,
            }
        })
        return response.data
    } catch (error) {
        console.log(error)
        return { categories: [], discription: "", status: "error" };

    }
}


export const getNews = async (params?:ParamsType): Promise<NewsApiResponse> => {
    try {
        const {
            page_number = 1,
            page_size = 10,
            category,
            keywords,
          } = params || {};
        const response = await axios.get(`${BASE_URL}search`, {
            params: {
                apiKey: API_KEY,
                page_size,
                page_number,
                category,
                keywords,
            }
        })
        return response.data
    } catch (error) {
        console.log(error)
        return { news: [], page: 1, status: "error" };

    }
}