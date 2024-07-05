import { configureStore } from '@reduxjs/toolkit'
import electronicReducer from './reducer/ElectronicSlice'
import menReducer from './reducer/MenSlice'
import womenReducer from './reducer/WomenSlice'
import jeweelReducer from './reducer/JaweelSlice'


export const store = configureStore({
  reducer: {
    electronic:electronicReducer,
    men:menReducer,
    women:womenReducer,
    jeweel:jeweelReducer
  },
})