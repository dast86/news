import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { NewsApiResponse, ParamsType } from '../../interface'

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL
const API_KEY = import.meta.env.VITE_NEWS_API_KEY

export const newsApi = createApi({
  reducerPath: 'newsAд', // указывает путь редьюсера в Redux. Имя должно быть уникальным, чтобы не возникло конфликтов.
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }), // определяет базовый запрос. Здесь указывается базовый URL

//  endpoints -  функция, определяющая эндпоинты или доступные запросы 
  endpoints: (builder) => ({
    getNews: builder.query<NewsApiResponse, ParamsType>({
      query: (params) => {
        const {
            page_number = 1,
            page_size = 10,
            category,
            keywords,
          } = params || {};
        return {
            url:`search`,
            params: {
                apiKey: API_KEY,
                page_size,
                page_number,
                category,
                keywords,
            }
        }
      },
    }),
  }),
})

export const { useGetNewsQuery } = newsApi













