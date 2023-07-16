import create from 'zustand'
// @ts-ignore
import {StoreType} from '@types/storeType'
import {defaultCardData} from '../constants/defaultCardData'

export const useCard = create<StoreType>(set => (
	{
		cardData: defaultCardData,
		changeData: (name: string, value: string) => set(state => ({
			...state,
			cardData: {
				...state.cardData,
				[name]: value
			}
		})),
		removeData: () => set(state => ({
			...state,
			cardData: defaultCardData
		})),
		cardRotate: false,
		changeCardRotate: (value: boolean) => set(state => ({
			...state,
			cardRotate: value
		})),
		fieldBorder: undefined,
		changeFieldBorder: (value?: string) => set(state => ({
			...state,
			fieldBorder: value
		}))
	}
))