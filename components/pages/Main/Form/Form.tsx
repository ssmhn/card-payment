import classes from './Form.module.scss'
import {ChangeEvent, FC, PropsWithChildren, useEffect, useState} from 'react'
import {TextField} from '@ui/TextField/TextField'
import {useCard} from '@store/store'
// @ts-ignore
import {CardData} from '@types/storeType'
// @ts-ignore
import {FormType} from '@types/formType'
import {getDateInputsOptions} from '@utils/getDateInpputsOptions/getDateInpputsOptions'
import {SelectField} from '@ui/SelectField/SelectField'


interface FormProps {

}

const initialData: CardData = {
	number: '',
	name: '',
	cvc: '',
	month: '',
	year: ''
}

const defaultData: CardData = {
	number: '################',
	cvc: '***',
	name: 'ivanov ivan',
	month: 'MM',
	year: 'YY'
}

const initialDateSelectValues: FormType = {
	months: [],
	years: []
}

export const Form: FC<PropsWithChildren<FormProps>> = ({}) => {
	const {changeData} = useCard(state => state)
	const [formData, setFormData] = useState(initialData)
	const [dateSelectValues, setDateSelectValues] = useState<FormType>(initialDateSelectValues)
	
	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const name = e.target.name
		let value = e.target.value
		
		if (e.target.name === 'number') {
			const hash = 16 - value.length
			for (let i = 0; i < hash; ++i) {
				value += '#'
			}
		}
		
		if (e.target.name === 'cvc') {
			const hash = 3 - value.length
			for (let i = 0; i < hash; ++i) {
				value += '*'
			}
		}
		
		if (e.target.value)
			changeData(name, value)
		else {
			// @ts-ignore
			changeData(name, defaultData[name])
		}
		
		setFormData((prev) => {
			return {
				...prev,
				[name]: value
					.replaceAll('#', '')
					.replaceAll('*', '')
			}
		})
	}
	
	const onChangeSelectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
		const name = e.target.name
		let value = e.target.value
		if (name === 'year') {
			value = value.slice(2, 4)
		} else {
			if (+value < 10) {
				value = '0' + value
			}
		}
		
		changeData(name, value)
		
		setFormData((prev) => {
			return {...prev, [name]: value}
		})
	}
	
	useEffect(() => {
		setDateSelectValues(getDateInputsOptions())
	}, [])
	
	return (
		<div className={classes.Form}>
			<div className={classes.Background}></div>
			<div className={classes.FormWrapper}>
				<TextField
					id={'1'}
					placeholder={'ivanov ivan'}
					title={'Владелец карты'}
					name={'name'}
					value={formData.name}
					className={classes.Field}
					onChange={onChangeHandler}
				/>
				
				<TextField
					id={'2'}
					placeholder={'1234 5678 9012 3456'}
					title={'Номер карты'}
					name={'number'}
					value={formData.number}
					className={classes.Field}
					onChange={onChangeHandler}
					length={16}
				/>
				
				<div className={classes.Row}>
					<TextField
						id={'3'}
						placeholder={'***'}
						title={'CVC'}
						name={'cvc'}
						value={formData.cvc}
						className={classes.Field}
						onChange={onChangeHandler}
						type={'password'}
					/>
					
					<SelectField
						options={dateSelectValues.months}
						id={'4'}
						title={'Месяц'}
						name={'month'}
						onChange={onChangeSelectHandler}
						className={classes.Field}
					/>
					
					<SelectField
						options={dateSelectValues.years}
						id={'5'}
						title={'Год'}
						name={'year'}
						onChange={onChangeSelectHandler}
						className={classes.Field}
					/>
				</div>
				
				<button className={classes.Button}>Оплатить</button>
			</div>
        </div>
	)
}