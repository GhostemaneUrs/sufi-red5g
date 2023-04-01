import { useState, useEffect } from 'react'
import { type UseForm, type FormValues } from '@/type/useForm'

export const useForm = (initialValues: FormValues): UseForm => {
  const [values, setValues] = useState(initialValues)
  const [isValid, setIsValid] = useState<boolean>(true)

  const resetForm = (): void => {
    setValues(initialValues)
  }

  const validateValues = (values: FormValues): void => {
    Object.entries(values).some(value => {
      if (value[1] === null || value[1] === '') {
        setIsValid(true)
        return true
      } else {
        setIsValid(false)
        return false
      }
    })
  }

  const handleChangeValuesSelect = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleChangeValues = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    validateValues(values)
  }, [values])

  return {
    values,
    isValid,
    setValues,
    resetForm,
    handleChangeValues,
    handleChangeValuesSelect
  }
}
