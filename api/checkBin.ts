import axios from 'axios'
// @ts-ignore
import {CardInfoType} from '@types/cardInfoType'

export const checkBin = async (bin: string) => {
	const data = await axios.get<CardInfoType>(`https://api.bincodes.com/bin/?format=json&api_key=[API_KEY]&bin=${bin}`)
}