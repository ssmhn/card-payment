import classes from './TextField.module.scss'
import {ChangeEvent, FC, PropsWithChildren} from 'react'
import cn from 'classnames'

interface TextFieldProps {
	id: string
    placeholder: string
    title: string
    name: string
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
	className?: string
	length?: number
	type?: 'password'
}

export const TextField: FC<PropsWithChildren<TextFieldProps>> = ({id, placeholder, title, name, value, onChange, className, length, type}) => {
	return (
		<div className={cn(classes.TextField, className)}>
            <label
                className={classes.Label}
                htmlFor={id}
            >
                {title}
            </label>
            <input
                id={id}
                type={type || 'text'}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                className={classes.Input}
                maxLength={length}
            />
        </div>
	)
}