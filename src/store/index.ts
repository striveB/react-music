import { configureStore } from '@reduxjs/toolkit'
import { useSelector, useDispatch, TypedUseSelectorHook, shallowEqual } from 'react-redux'
import counterReducer from './modules/counter'
const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})

export type FnRetureType = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<FnRetureType> = useSelector
export type AppDispatch = typeof store.dispatch
export const useAppDispatch:  () => AppDispatch = useDispatch
export const appShallowEqual = shallowEqual

export default store
