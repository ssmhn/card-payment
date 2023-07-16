import axios from 'axios'
// @ts-ignore
import {CardInfoType} from '@types/cardInfoType'

export const checkBin = async (bin: string) => {
	const data = await axios.get<CardInfoType>(`https://api.bincodes.com/bin/?format=json&api_key=4ba160da59964c0e48021078c1e38b86&bin=${bin}`)
	
	console.log(data)
}