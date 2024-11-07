import { configureStore } from '@reduxjs/toolkit'
import { useSelector, TypedUseSelectorHook } from 'react-redux'
import counterReducer from './modules/counter'
const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})

export type FnRetureType = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<FnRetureType> = useSelector
export default store
