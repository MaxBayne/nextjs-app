import { configureStore } from '@reduxjs/toolkit'

import CounterReducer from '@/redux/slices/CounterSlice'
import WeatherReducer from '@/redux/slices/WeatherSlice'

export const store = configureStore({
  reducer: {
    CounterReducer: CounterReducer,
    WeatherReducer: WeatherReducer,
  

  },
})