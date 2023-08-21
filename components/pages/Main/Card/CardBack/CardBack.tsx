import classes from './CardBack.module.scss'
import {FC, MouseEvent, PropsWithChildren} from 'react'
import cn from 'classnames'
import {useCard} from '@store/store'
import {AnimatedNumbers} from '@ui/AnimatedNumbers/AnimatedNumbers'

interface CardBackProps {

}

export const CardBack: FC<PropsWithChildren<CardBackProps>> = ({}) => {
    const {name, cvc} = useCard(state => state.cardData)
    
    const focusInput = (e: MouseEvent<HTMLDivElement | HTMLSpanElement>, id: string) => {
        e.stopPropagation()
        
        const input = document.getElementById(id)
        
        input && input.focus()
    }
    
    return (
        <div className={cn(classes.CardBack)}>
            <div className={classes.MagnetLine}></div>
            <div className={classes.CVCLine}>
                <div className={classes.BackCardHolderName}>{name}</div>
                <div onClick={(e) => focusInput(e, 'i3')} className={classes.CVC}>
                    <div className={classes.CVCWrapper}>
                        <AnimatedNumbers
                            className={classes.Numbers}
                            numbers={cvc}
                            charWidth={12}
                            defaultChar={'*'}
                            hide
                        />
                    </div>
                </div>
            </div>
            <div className={cn(classes.DecorLine, classes.Long)}></div>
            <div className={cn(classes.DecorLine)}></div>
        </div>
	)
}