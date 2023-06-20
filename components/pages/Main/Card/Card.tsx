"use client"

import classes from './Card.module.scss'
import {FC, PropsWithChildren, useState} from 'react'
import cn from 'classnames'
import {CardBack} from '@page/Main/Card/CardBack/CardBack'
import {CardFront} from '@page/Main/Card/CardFront/CardFront'

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