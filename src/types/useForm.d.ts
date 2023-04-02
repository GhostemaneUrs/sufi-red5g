import { type Dispatch, type SetStateAction } from 'react'

export type FormValues = Record<
  string,
  string | number | boolean | date | any[]
>

export interface UseForm {
  values: FormValues
  isValid: boolean
  resetForm: () => void
  setValues: Dispatch<SetStateAction<FormValues>>
  handleChangeValues: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleChangeValuesSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void
}
