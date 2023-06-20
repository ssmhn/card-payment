"use client"

import classes from './Card.module.scss'
import {FC, PropsWithChildren, useState} from 'react'
import cn from 'classnames'
import {CardBack} from './CardBack/CardBack'
import {CardFront} from './CardFront/CardFront'

interface CardProps {

}

export const Card: FC<PropsWithChildren<CardProps>> = ({}) => {
	const [rotate, setRotate] = useState(false)
	
	const onClick = () => {
		setRotate(prev => !prev)
	}
	
	return (
		<div className={classes.Wrapper}>
			<div
				onClick={onClick}
				className={cn(classes.Card, {[classes.Active]: rotate})}
			>
				<CardFront />
				<CardBack />
			</div>
		</div>
	)
}