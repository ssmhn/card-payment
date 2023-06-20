import {FC, PropsWithChildren} from 'react'

interface ChipProps {
	className?: string
}

export const Chip: FC<PropsWithChildren<ChipProps>> = ({className}) => {
	return (
		<svg className={className} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 64 64" id="credit-card-chip">
			<path d="M4.944,50.556A2,2,0,0,0,6.882,52.6H20.02a.641.641,0,0,0,.5,0H58.366a.75.75,0,0,0,.75-.75V13.394a2,2,0,0,0-1.938-2.047H5.634a.75.75,0,0,0-.75.75V39.2a.746.746,0,0,0,.06.294ZM19.519,38.449H6.444V26.4H19.519ZM6.444,50.556V39.949H19.519V51.1H6.882A.508.508,0,0,1,6.444,50.556Zm51.172-13H44.481V25.5H57.616ZM44.481,51.1V39.052H57.616v11.5a.509.509,0,0,1-.438.547ZM57.616,13.394V24H43.731a.75.75,0,0,0-.75.75V51.1H21.019V12.847H57.178A.509.509,0,0,1,57.616,13.394Zm-38.1-.547V24.9H6.444v-11.5a.508.508,0,0,1,.438-.547Z" fill={'#999999'}></path>
		</svg>
	)
}