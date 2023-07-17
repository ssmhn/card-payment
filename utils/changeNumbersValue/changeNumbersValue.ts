export const changeNumbersValue = (value: string, changeChar: string, length: number) => {
	const hash = length - value.length
	for (let i = 0; i < hash; ++i) {
		value += changeChar
	}
	
	return value
}