import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Items } from '../../interface'


// Типизация нашего массива новостей
interface State {
  news: Items[]
}

// Тут хранится наш главный state, то есть состояние. Именно тут будет сохрнятся наш массив новостей после получения данных. Далее отсюда мы уже можем в любой компонент передать нужные нам данные 
const initialState: State = {
    news: [],
}

export const newsSlice = createSlice({
  name: 'news',  
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<Items[]>) => {
      state.news = action.payload
    },
  },
})

export const { setNews } = newsSlice.actions // тут мы экспортируем этот метод( или функцию по дргуому) что бы в компоненте, в котором нам нужжно  поменять данные в news, то мы будет это делать через setNews(...). 



export default newsSlice.reducer // Экспорт редьюсера позволяет добавить его в хранилище (store) в configureStore (это который находится в папке store/index.ts). 