export const textMotion = {
	initial: {
		opacity: 0,
		y: 0
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.3,
			duration: 0.2
		}
	},
	exit: {
		opacity: 0,
		y: -10,
		transition: {
			duration: 0.2
		}
	}
}