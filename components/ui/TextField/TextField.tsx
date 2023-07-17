import classes from './TextField.module.scss'
import {ChangeEvent, FocusEvent, FC, PropsWithChildren} from 'react'
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
	onFocus?: (e: FocusEvent<HTMLInputElement>) => void
	onBlur?: (e: FocusEvent<HTMLInputElement>) => void
	autocomplete?: string
}

export const TextField: FC<PropsWithChildren<TextFieldProps>> = (
	{
		id,
		placeholder,
		title,
		name,
		value,
		onChange,
		className,
		length,
		type,
		onFocus,
		onBlur,
		autocomplete
	}) => {
	
	return (
		<div className={cn(classes.TextField, className)}>
            <label
                className={classes.Label}
                htmlFor={'i' + id}
            >
                {title}
            </label>
            <input
	            onBlur={onBlur}
	            onFocus={onFocus}
                id={'i' + id}
                type={type || 'text'}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                className={classes.Input}
                maxLength={length}
	            autoComplete={autocomplete}
            />
        </div>
	)
}