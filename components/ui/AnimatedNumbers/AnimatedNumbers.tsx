import classes from './AnimatedNumbers.module.scss'
import {FC, PropsWithChildren} from 'react'
import {incrementMargin} from '@utils/incrementMargin/incrementMargin'
import {AnimatePresence, motion} from 'framer-motion'
import {textMotion} from '@motions/textMotion'

interface AnimatedNumbersProps {
	numbers: string
    charWidth: number
    defaultMargin?: number
    blockSize?: number
    blockCount?: number
	className?: string
	defaultChar: string
	hide?: boolean
}

export const AnimatedNumbers: FC<PropsWithChildren<AnimatedNumbersProps>> = (
	{
		numbers,
		charWidth,
		defaultMargin,
		blockSize,
		blockCount,
		className,
		defaultChar,
		hide
	}) => {
	return (
        <div className={className}>
            {
                numbers.split('').map((el, i) => {
					let margin = 1
					if (blockSize && blockCount)
						margin = incrementMargin(i, blockSize, blockCount)
	                
                    return (
                        <AnimatePresence
                            key={i}
                            initial={false}
                        >
                            {
                                el === defaultChar ?
                                    (
                                        <motion.span
                                            initial={'initial'}
                                            animate={'animate'}
                                            exit={'exit'}
                                            variants={textMotion}
                                            key={i + el}
                                            style={{
                                                left: `${i * charWidth + (defaultMargin || 0) * margin}px`
                                            }}
                                            className={classes.Number}
                                        >
                                            {el}
                                        </motion.span>
                                    ) :
                                    (
                                        <motion.span
                                            initial={'initial'}
                                            animate={'animate'}
                                            exit={'exit'}
                                            variants={textMotion}
                                            key={i + el}
                                            style={{
                                                left: `${i * charWidth + (defaultMargin || 0) * margin}px`
                                            }}
                                            className={classes.Number}
                                            dangerouslySetInnerHTML={{__html: hide ? '&#183;' : i > 3 && i < 12 ? '*' : el}}
                                        />
                                    )
                            }
                        </AnimatePresence>
                    )
                })
            }
        </div>
	)
}