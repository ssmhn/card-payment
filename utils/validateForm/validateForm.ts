// @ts-ignore
import {CardData} from '@types/storeType'

export const validateForm = (data: CardData) => {
	let valid = true
	
	if (data.number.length < 16) valid = false
	if (data.cvc.length < 3) valid = false
	if (data.name.replaceAll(' ', '').length === 0) valid = false
	if (!data.year) valid = false
	if (!data.month) valid = false
	
	return valid
}