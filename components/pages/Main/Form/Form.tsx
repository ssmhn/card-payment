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
import {changeNumbersValue} from '@utils/changeNumbersValue/changeNumbersValue'
import {defaultCardData} from '../../../../constants/defaultCardData'
import {validateForm} from '@utils/validateForm/validateForm'
import {checkBin} from '../../../../api/checkBin'
import {separateStr} from "@utils/separateStr/separateStr";


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
	const {changeData, changeCardRotate, removeData, changeFieldBorder} = useCard(state => state)
	const [formData, setFormData] = useState(initialData)
	const [dateSelectValues, setDateSelectValues] = useState<FormType>(initialDateSelectValues)
	
	const onChangeHandler = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const name = e.target.name
		let value = e.target.value
		let formValue = e.target.value
		
		if (name === 'name') {
			value = value.replace(/[^A-Za-z ]/g, '').toUpperCase()
		}
		
		if (name === 'number') {
			value = value.replace(/[^\d]/g, '').replaceAll(' ', '')
			formValue = formValue.replace(/[^\s\d]/g, '').replaceAll(' ', '')

			if (value.length > 16) value = value.slice(0, 16)
			if (formValue.length > 16) formValue = formValue.slice(0, 16)

			formValue = separateStr(formValue, 4).join(' ')

			value = changeNumbersValue(value, '#', 16)
			
			const numbers = value.replaceAll('#', '')

			if (numbers.length === 6) {
				checkBin(numbers)
			}
		}
		
		if (name === 'cvc') {
			value = value.replace(/[^\d]/g, '')
			value = changeNumbersValue(value, '*', 3)
		}
		
		setFormData((prev) => {
			return {
				...prev,
				[name]: name === 'number' ?
					formValue :
					value
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
					placeholder={'1234 5678 9012 3456'}
					title={'Номер карты'}
					name={'number'}
					value={formData.number}
					className={classes.Field}
					onChange={onChangeHandler}
					length={19}
					onFocus={() => changeFieldBorder('number')}
					onBlur={() => changeFieldBorder()}
					autocomplete={'cc-number'}
				/>
				
				<TextField
					id={'2'}
					placeholder={'ivanov ivan'}
					title={'Владелец карты'}
					name={'name'}
					value={formData.name}
					className={classes.Field}
					onChange={onChangeHandler}
					onFocus={() => changeFieldBorder('name')}
					onBlur={() => changeFieldBorder()}
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
						onFocus={() => changeFieldBorder('date')}
						onBlur={() => changeFieldBorder()}
					/>
					
					<SelectField
						options={dateSelectValues.years}
						id={'5'}
						title={'Год'}
						name={'year'}
						onChange={onChangeHandler}
						className={classes.Field}
						value={formData.year}
						onFocus={() => changeFieldBorder('date')}
						onBlur={() => changeFieldBorder()}
					/>
				</div>

				<div className={classes.Button}>
					<button onClick={sendForm} className={classes.Link}>
						<svg className={classes.Gradient} height="60" width="235" xmlns="http://www.w3.org/2000/svg">
							<defs>
								<linearGradient id="gradient">
									<stop className={classes.Stop1} offset="0%" stopColor="#06d6a0" />
									<stop className={classes.Stop2} offset="95%" stopColor="#06d6a0" />
								</linearGradient>
							</defs>
							<rect rx={10} ry={10} className={classes.Rect} height="60" width="235" />
						</svg>
						<div className={classes.Text}>Оплатить</div>
					</button>
				</div>
			</div>
        </div>
	)
}