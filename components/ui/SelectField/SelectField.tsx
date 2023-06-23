import classes from './SelectField.module.scss'
import {ChangeEvent, FC, PropsWithChildren} from 'react'
import cn from 'classnames'

interface SelectFieldProps {
	options: number[]
    id: string
    title: string
    name: string
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void
    className?: string
	value: string
}

export const SelectField: FC<PropsWithChildren<SelectFieldProps>> = ({options, id, name, className, onChange, title, value}) => {
	
	return (
        <div className={cn(classes.TextField, className)}>
            <label
                className={classes.Label}
                htmlFor={id}
            >
                {title}
            </label>
            <select
                className={classes.Select}
                onChange={onChange}
                name={name}
                id={id}
                value={value}
            >
                {options.map((el, i) => (
                    <option key={i+el+name} value={el}>{el}</option>
                ))}
            </select>
        </div>
	)
}