import { useState } from 'react'
import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux'

import { AppStore, AppDispatch, RootState } from '../redux/Store'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
