import create from 'zustand'
import {StoreType} from '../types/storeType'

export const useCard = create<StoreType>(set => (
	{
		cardData: {
			number: '################',
			cvc: '***',
			name: 'ivanov ivan',
			month: 'MM',
			year: 'YY'
		},
		changeData: (name: string, value: string) => set(state => ({
			...state.cardData,
			cardData: {
				...state.cardData,
				[name]: value
			}
		}))
	}
))