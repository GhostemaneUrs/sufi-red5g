// import moment from 'moment'
import React, { useState } from 'react'
import { type FormValues } from '@/type/useForm'
import { type SetStateAction, type Dispatch } from 'react'
import { BsChevronDown, BsCalendar4Event } from 'react-icons/bs'

interface FilterProps {
  filter: FormValues
  setFilter: Dispatch<SetStateAction<FormValues>>
}

export const Filter: React.FC<FilterProps> = ({ filter, setFilter }) => {
  const [formatDateEnd, setFormatDateEnd] = useState<string>('text')
  const [formatDateStart, setFormatDateStart] = useState<string>('text')

  return (
    <div className='w-full bg-[#FAFAFA] py-4'>
      <form
        className='flex xl:gap-4 2xl:gap-10 w-full items-center px-[72px]'
        noValidate
      >
        <div className='relative w-full max-w-[176px]'>
          <select
            id='typeDocument'
            name='typeDocument'
            placeholder='Tipo doc.'
            // value={filter.typeDocument}
            // onChange={e => {
            //   setFilter({ ...filter, typeDocument: e.target.value })
            // }}
            className='peer w-full border solid border-[#ABB9C780] rounded-md h-[56px] outline-none placeholder-transparent focus:outline-none text-[#413E4D] text-base px-4 pt-3 appearance-none'
          >
            <option value=''></option>
            <option value='dni'>DNI</option>
            <option value='cc'>Cédula</option>
          </select>
          <label
            htmlFor='typeDocument'
            className='absolute left-4 top-[5px] text-[#ABB9C7] text-[12px] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-[#ABB9C7] peer-placeholder-shown:top-[16px] peer-focus:-top-0 peer-focus:text-[12px]'
          >
            Tipo doc.
          </label>
          <div className='absolute inset-y-0 right-0 flex items-center pt-2 px-3 pointer-events-none'>
            <BsChevronDown className='text-[#DD3542] text-2xl' />
          </div>
        </div>
        <div className='relative w-full max-w-[272px]'>
          <input
            type='text'
            id='document'
            name='document'
            // value={filter.document}
            // onChange={e => {
            //   const res = /^[a-zA-Z0-9]+$/
            //   if (e.target.value === '' || res.test(e.target.value)) {
            //     console.log(
            //       '🚀 ~ file: index.tsx:23 ~ e.target.value:',
            //       e.target.value
            //     )
            //   }
            // }}
            placeholder='Número de documento'
            className='peer w-full border solid border-[#ABB9C780] rounded-md h-[56px] outline-none placeholder-transparent focus:outline-none text-[#413E4D] text-base px-4 pt-3'
          />
          <label
            htmlFor='document'
            className='absolute left-4 top-[5px] text-[#ABB9C7] text-[12px] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-[#ABB9C7] peer-placeholder-shown:top-[16px] peer-focus:-top-0 peer-focus:text-[12px]'
          >
            Número de documento
          </label>
        </div>
        <div className='relative w-full max-w-[272px]'>
          <input
            type='text'
            id='numberDisbursement'
            name='numberDisbursement'
            // value={filter.numberDisbursement}
            // onChange={e => {
            //   const res = /^[a-zA-Z0-9]+$/
            //   if (e.target.value === '' || res.test(e.target.value)) {
            //     console.log(
            //       '🚀 ~ file: index.tsx:23 ~ e.target.value:',
            //       e.target.value
            //     )
            //   }
            // }}
            placeholder='Número de desembolso'
            className='peer w-full border solid border-[#ABB9C780] rounded-md h-[56px] outline-none placeholder-transparent focus:outline-none text-[#413E4D] text-base px-4 pt-3'
          />
          <label
            htmlFor='numberDisbursement'
            className='absolute left-4 top-[5px] text-[#ABB9C7] text-[12px] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-[#ABB9C7] peer-placeholder-shown:top-[16px] peer-focus:-top-0 peer-focus:text-[12px]'
          >
            Número de desembolso
          </label>
        </div>
        <div className='relative w-full max-w-[272px]'>
          <input
            type={formatDateStart}
            id='dateStart'
            name='dateStart'
            // value={moment(filter.dateStart).format('DD-MM-YYYY')}
            // onChange={e => {
            //   console.log(
            //     '🚀 ~ file: index.tsx:23 ~ e.target.value:',
            //     e.target.value
            //   )
            // }}
            onFocus={() => {
              setFormatDateStart('date')
            }}
            onBlur={() => {
              setFormatDateStart('text')
            }}
            placeholder='Número de desembolso'
            className='peer w-full border solid border-[#ABB9C780] rounded-md h-[56px] outline-none placeholder-transparent focus:outline-none text-[#413E4D] text-base px-4 pt-3'
          />
          <label
            htmlFor='dateStart'
            className='absolute left-4 top-[5px] text-[#ABB9C7] text-[12px] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-[#ABB9C7] peer-placeholder-shown:top-[16px] peer-focus:-top-0 peer-focus:text-[12px]'
          >
            Desde
          </label>
          <div className='absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none'>
            <BsCalendar4Event className='text-[#DD3542] text-2xl' />
          </div>
        </div>
        <div className='relative w-full max-w-[272px]'>
          <input
            type={formatDateEnd}
            id='dateEnd'
            name='dateEnd'
            // value={moment(filter.dateEnd).format('DD-MM-YYYY')}
            // onChange={e => {
            //   console.log(
            //     '🚀 ~ file: index.tsx:23 ~ e.target.value:',
            //     e.target.value
            //   )
            // }}
            onFocus={() => {
              setFormatDateEnd('date')
            }}
            onBlur={() => {
              setFormatDateEnd('text')
            }}
            placeholder='Número de desembolso'
            className='peer w-full border solid border-[#ABB9C780] rounded-md h-[56px] outline-none placeholder-transparent focus:outline-none text-[#413E4D] text-base px-4 pt-3 appearance-none'
          />
          <label
            htmlFor='dateEnd'
            className='absolute left-4 top-[5px] text-[#ABB9C7] text-[12px] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-[#ABB9C7] peer-placeholder-shown:top-[16px] peer-focus:-top-0 peer-focus:text-[12px]'
          >
            Hasta
          </label>
          <div className='absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none'>
            <BsCalendar4Event className='text-[#DD3542] text-2xl' />
          </div>
        </div>
      </form>
    </div>
  )
}
