import classes from './CardFront.module.scss'
import {FC, PropsWithChildren} from 'react'
import cn from 'classnames'
import {useCard} from '@store//store'
import {AnimatedNumbers} from '@ui/AnimatedNumbers/AnimatedNumbers'
import {Chip} from '@icons/Chip'

interface CardFrontProps {

}

export const CardFront: FC<PropsWithChildren<CardFrontProps>> = ({}) => {
    const {month, year, name, number} = useCard(state => state.cardData)
    
    return (
        <div className={cn(classes.CardFront)}>
            <div className={classes.FrontHeader}>
                <Chip className={classes.ChipIcon} />
            </div>
            
            <div className={classes.FrontMiddle}>
                <div className={classes.NumbersWrapper}>
                    <AnimatedNumbers
                        className={classes.Numbers}
                        numbers={number}
                        charWidth={12}
                        defaultMargin={20}
                        blockCount={4}
                        blockSize={4}
                    />
                </div>
            </div>
            
            <div className={classes.FrontFooter}>
                <div className={classes.Name}>
                    <span className={classes.FooterTitle}>Владелец карты</span>
                    <span className={classes.FooterText}>{name.toUpperCase()}</span>
                </div>
                <div className={classes.Date}>
                    <span className={classes.FooterTitle}>Дата выдачи</span>
                    <span className={classes.FooterText}>{month}/{year}</span>
                </div>
            </div>
        </div>
	)
}