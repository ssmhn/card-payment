export const incrementMargin = (i: number, blockSize: number, blockCount: number) => {
	let margin = 0
	const limits: number[] = []
	
	for (let i = 1; i < blockCount; ++i) {
		limits.push(blockSize * i)
	}
	
	limits.forEach((el, j) => {
		if (j < limits.length - 1) {
			if (i >= el && i < limits[j + 1]) {
				margin = j + 1
			}
		}
		else if (i >= el) {
			margin = j + 1
		}
	})
	
	return margin
}