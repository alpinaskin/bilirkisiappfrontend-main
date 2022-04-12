/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useReducer } from 'react'
import { initialValues } from './initialValues'

const isText = RegExp(/^[a-zA-Z wığüşöçĞÜŞÖÇİ . 1-9]+$/i)
const isEmail = RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)
const isPhone = RegExp(/^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4,6})$/) // us
const isZip = RegExp(/^[0-9]{5}([- /]?[0-9]{4})?$/) // us
const isNumber = RegExp(/^\d+$/)
const isDecimal = RegExp(/^\d+(\.\d{1,2})?$/)

// Applied to all fields
const variant = 'standard'
const margin = 'normal'

export declare type ValidationSchema = Record<
  string,
  {
    value?: any
    error?: string
    required?: boolean
    validate?: 'text' | 'number' | 'email' | 'phone' | 'zip' | 'checkbox' | 'select' | 'decimal'
    minLength?: number
    maxLength?: number
    helperText?: string
  }
>

type ContextProps = {
  activeStep: number
  formValues: ValidationSchema
  handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, checked?: boolean) => void
  handleNext: () => void
  handleBack: () => void
  handleBeginning: () => void
  variant: 'outlined' | 'standard' | 'filled'
  margin: 'dense' | 'normal' | 'none'
}

export const AppContext = createContext<ContextProps>({
  activeStep: 0,
  formValues: initialValues,
  handleChange() {},
  handleNext() {},
  handleBack() {},
  handleBeginning() {},
  variant,
  margin
})

interface ProviderProps {
  children: React.ReactNode
}

type State = {
  activeStep: number
  formValues: ValidationSchema
}

type Action =
  | { type: 'increase' }
  | { type: 'decrease' }
  | { type: 'submit-form' }
  | { type: 'form-value'; name: string; fieldValue: any }
  | { type: 'form-error'; name: string; error: string }

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'increase':
      return {
        ...state,
        activeStep: state.activeStep + 1
      }
    case 'decrease':
      return {
        ...state,
        activeStep: state.activeStep - 1
      }
    case 'submit-form':
      return {
        ...state,
        activeStep: 0,
        formValues: {
          ...initialValues
        }
      }
    case 'form-value':
      return {
        ...state,
        formValues: {
          ...state.formValues,
          [action.name]: {
            ...state.formValues[action.name],
            value: action.fieldValue
          }
        }
      }
    case 'form-error':
      return {
        ...state,
        formValues: {
          ...state.formValues,
          [action.name]: {
            ...state.formValues[action.name],
            error: action.error
          }
        }
      }

    default:
      return state
  }
}

export function StepsProvider({ children }: ProviderProps) {
  const [{ activeStep, formValues }, dispatch] = useReducer(reducer, {
    activeStep: 0,
    formValues: initialValues
  })

  // Proceed to next step
  const handleNext = () => dispatch({ type: 'increase' })

  // Go back to prev step
  const handleBack = () => dispatch({ type: 'decrease' })

  //Go to beginning of the step
  const handleBeginning = () => dispatch({ type: 'submit-form' })

  // Handle form change
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, checked?: boolean) => {
    const { type, name, value } = event.target

    const fieldValue = type === 'checkbox' ? checked : value

    dispatch({ type: 'form-value', name, fieldValue })

    const fieldName = initialValues[name]
    if (!fieldName) return

    const { required, validate, minLength, maxLength, helperText } = fieldName

    let error = ''

    if (required && !fieldValue) error = 'Bu alan zorunludur'
    if (minLength && value && value.length < minLength) error = `En az ${minLength} karakter giriniz.`
    if (maxLength && value && value.length > maxLength) error = 'Karakter sınırını aştınız!'
    if (validate) {
      switch (validate) {
        case 'text':
          if (value && !isText.test(value)) error = helperText || 'Geçerli metin girdiğinizden emin olun.'
          break

        case 'number':
          if (value && !isNumber.test(value)) error = helperText || 'Sadece sayı giriniz.'
          break

        case 'email':
          if (value && !isEmail.test(value)) error = helperText || 'Geçirli bir eposta adresi giriniz.'
          break

        case 'phone':
          if (value && !isPhone.test(value))
            error = helperText || 'Geçerli bir telefon numarası giriniz. örn: xxx-xxx-xxxx'
          break

        case 'decimal':
          if (value && !isDecimal.test(value)) error = helperText || 'Lütfen ondalıklı bir sayı giriniz.'
          break

        case 'zip':
          if (value && !isZip.test(value)) error = helperText || 'Geçerli bir posta kodu girin.'
          break

        case 'checkbox':
          if (!checked) error = helperText || 'Geçerli bir değer girin.'
          break

        case 'select':
          if (!value) error = helperText || 'Listeden seçiminizi yapın.'
          break

        default:
          break
      }
    }

    dispatch({ type: 'form-error', name, error })
  }

  return (
    <AppContext.Provider
      value={{
        activeStep,
        formValues,
        handleChange,
        handleNext,
        handleBack,
        handleBeginning,
        variant,
        margin
      }}
    >
      <div className='mui-step-form'>{children}</div>
    </AppContext.Provider>
  )
}
