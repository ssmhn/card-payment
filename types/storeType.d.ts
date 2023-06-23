export type StoreType = {
	cardData: CardData,
	changeData: (name: string, value: string) => void,
	cardRotate: boolean,
	changeCardRotate: (value: boolean) => void,
	removeData: () => void
}

export type CardData = {
	number: string,
	cvc: string,
	name: string,
	month: string,
	year: string
}