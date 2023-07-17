import classes from './CardFront.module.scss'
import {MouseEvent, FC, PropsWithChildren} from 'react'
import cn from 'classnames'
import {useCard} from '@store//store'
import {AnimatedNumbers} from '@ui/AnimatedNumbers/AnimatedNumbers'
import {Chip} from '@icons/Chip'
import {AnimatePresence} from 'framer-motion'
import {textMotion} from '@motions/textMotion'
import {motion} from 'framer-motion'

interface CardFrontProps {

}

export const CardFront: FC<PropsWithChildren<CardFrontProps>> = ({}) => {
    const {month, year, name, number} = useCard(state => state.cardData)
    const active = useCard(state => state.fieldBorder)
    
    const focusInput = (e: MouseEvent<HTMLDivElement | HTMLSpanElement>, id: string) => {
        e.stopPropagation()
        
        const input = document.getElementById(id)
        
        input && input.focus()
    }
    
    return (
        <div className={cn(classes.CardFront)}>
            <div className={classes.FrontHeader}>
                <Chip className={classes.ChipIcon} />
            </div>
            
            <div className={classes.FrontMiddle}>
                <div
                    className={cn(classes.NumbersWrapper, {[classes.Border]: active === 'number'})}
                    onClick={(e) => focusInput(e, 'i1')}
                >
                    <AnimatedNumbers
                        className={classes.Numbers}
                        numbers={number}
                        charWidth={12}
                        defaultMargin={20}
                        blockCount={4}
                        blockSize={4}
                        defaultChar={'#'}
                    />
                </div>
            </div>
            
            <div className={classes.FrontFooter}>
                <div className={classes.Name}>
                    <span className={classes.FooterTitle}>Владелец карты</span>
                    <div
                        className={cn(classes.Text, {[classes.Border]: active === 'name'})}
                        onClick={(e) => focusInput(e, 'i2')}
                    >
                        <AnimatePresence>
                            {name.toUpperCase().split('').map((el, i, arr) => (
                                <motion.span
                                    key={i + el + (i % arr.length - i)}
                                    initial={'initial'}
                                    animate={'animate'}
                                    exit={'exit'}
                                    variants={textMotion}
                                    className={classes.FooterText}
                                    dangerouslySetInnerHTML={{__html: el === ' ' ? `&nbsp;` : el}}
                                />
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
                
                <div className={classes.Date}>
                    <span className={classes.FooterTitle}>Дата выдачи</span>
                    <div className={cn(classes.Text, {[classes.Border]: active === 'date'})}>
                        <AnimatePresence>
                            <motion.span
                                key={month}
                                initial={'initial'}
                                animate={'animate'}
                                exit={'exit'}
                                variants={textMotion}
                                className={cn(classes.FooterText, classes.Absolute)}
                                style={{right: '29px'}}
                                onClick={(e) => focusInput(e, 'i4')}
                            >
                                {month}
                            </motion.span>
                        </AnimatePresence>
                        
                        <span
                            style={{right: '23.5px'}}
                            className={cn(classes.FooterText, classes.Absolute)}
                        >/</span>
                        
                        <AnimatePresence>
                            <motion.span
                                key={year}
                                initial={'initial'}
                                animate={'animate'}
                                exit={'exit'}
                                variants={textMotion}
                                className={cn(classes.FooterText, classes.Absolute)}
                                onClick={(e) => focusInput(e, 'i5')}
                            >
                                {year}
                            </motion.span>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
	)
}