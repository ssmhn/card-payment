import classes from './Form.module.scss'
import {ChangeEvent, FocusEvent, FC, PropsWithChildren, useEffect, useState} from 'react'
import {TextField} from '@ui/TextField/TextField'
import {useCard} from '@store/store'
// @ts-ignore
import {CardData} from '@types/storeType'
// @ts-ignore
import {FormType} from '@types/formType'
import {getDateInputsOptions} from '@utils/getDateInpputsOptions/getDateInpputsOptions'
import {SelectField} from '@ui/SelectField/SelectField'
import {changeNumbersValue} from '@utils/changeNumbersValue/changeNumbersValue'
import {defaultCardData} from '../../../../constants/defaultCardData'
import {validateForm} from '@utils/validateForm/validateForm'


interface FormProps {

}

const initialData: CardData = {
	number: '',
	name: '',
	cvc: '',
	month: '',
	year: ''
}

const initialDateSelectValues: FormType = {
	months: [],
	years: []
}

export const Form: FC<PropsWithChildren<FormProps>> = ({}) => {
	const {changeData, changeCardRotate, removeData} = useCard(state => state)
	const [formData, setFormData] = useState(initialData)
	const [dateSelectValues, setDateSelectValues] = useState<FormType>(initialDateSelectValues)
	
	const onChangeHandler = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const name = e.target.name
		let value = e.target.value
		
		if (name === 'name') {
			value = value.replace(/[^A-Za-z ]/g, '')
		}
		
		if (name === 'number') {
			value = changeNumbersValue(value, '#', 16)
		}
		
		if (name === 'cvc') {
			value = changeNumbersValue(value, '*', 3)
		}
		
		setFormData((prev) => {
			return {
				...prev,
				[name]: value
					.replaceAll('#', '')
					.replaceAll('*', '')
			}
		})
		
		if (name === 'year') {
			value = value.slice(2, 4)
		}
		
		if (name === 'month') {
			if (+value < 10) {
				value = '0' + value
			}
		}
		
		// @ts-ignore
		value ? changeData(name, value) : changeData(name, defaultCardData[name])
	}
	
	const onBlurOrFocusHandler = (eventType: 'blur' | 'focus') => {
		changeCardRotate(eventType === 'focus')
	}
	
	const sendForm = () => {
		console.log(formData)
		if (!validateForm(formData)) return
		
		alert('Form is Sended!')
		
		setFormData(initialData)
		removeData()
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
						length={3}
						onFocus={() => onBlurOrFocusHandler('focus')}
						onBlur={() => onBlurOrFocusHandler('blur')}
					/>
					
					<SelectField
						options={dateSelectValues.months}
						id={'4'}
						title={'Месяц'}
						name={'month'}
						onChange={onChangeHandler}
						className={classes.Field}
						value={formData.month}
					/>
					
					<SelectField
						options={dateSelectValues.years}
						id={'5'}
						title={'Год'}
						name={'year'}
						onChange={onChangeHandler}
						className={classes.Field}
						value={formData.year}
					/>
				</div>
				
				<button onClick={sendForm} className={classes.Button}>Оплатить</button>
			</div>
        </div>
	)
}