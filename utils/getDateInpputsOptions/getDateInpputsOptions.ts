export const getDateInputsOptions = () => {
	const year = (new Date()).getFullYear()
	const years = Array.from(new Array(20),( val, index) => index + year)
	
	const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
	
	return {
		years: years,
		months: months
	}
}