"use client"

import classes from './Card.module.scss'
import {FC, PropsWithChildren, useState} from 'react'
import cn from 'classnames'
import {CardBack} from './CardBack/CardBack'
import {CardFront} from './CardFront/CardFront'
import {useCard} from '@store/store'

interface CardProps {

}

export const Card: FC<PropsWithChildren<CardProps>> = ({}) => {
	const {cardRotate, changeCardRotate} = useCard(state => state)
	
	const onClick = () => {
		changeCardRotate(!cardRotate)
	}
	
	return (
		<div className={classes.Wrapper}>
			<div
				onClick={onClick}
				className={cn(classes.Card, {[classes.Active]: cardRotate})}
			>
				<CardFront />
				<CardBack />
			</div>
		</div>
	)
}