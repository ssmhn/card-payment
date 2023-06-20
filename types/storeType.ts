export interface StoreType {
	cardData: CardData
	changeData: (name: string, value: string) => void
}

export type CardData = {
	number: string,
	cvc: string,
	name: string,
	month: string,
	year: string
}