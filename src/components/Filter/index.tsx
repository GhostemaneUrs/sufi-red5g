import { type FormValues } from '@/type/useForm'
import { AiFillCloseCircle } from 'react-icons/ai'
import { BsChevronDown, BsCalendar4Event } from 'react-icons/bs'
import { type SetStateAction, type Dispatch, useState } from 'react'

interface FilterProps {
  filter: FormValues
  setFilter: Dispatch<SetStateAction<FormValues>>
}
export const Filter: React.FC<FilterProps> = ({ filter, setFilter }) => {
  const [formatDateStart, setFormatDateStart] = useState<string>('text')
  const [formatDateEnd, setFormatDateEnd] = useState<string>('text')
  return (
    <div className='w-full bg-[#FAFAFA] py-4'>
      {Object.values(filter).some(item => item !== '') && (
        <AiFillCloseCircle
          onClick={() => {
            setFilter({
              dateEnd: '',
              dateStart: '',
              document: '',
              documentType: '',
              numberDisbursement: ''
            })
          }}
          className=' absolute top-[202px] left-[23px] text-[#DD3542] text-2xl cursor-pointer'
        />
      )}
      <form
        noValidate
        className='flex gap-4 2xl:gap-10 w-full items-center px-[72px]'
      >
        <div className='relative w-full max-w-[176px]'>
          <select
            id='documentType'
            name='documentType'
            placeholder='Tipo doc.'
            value={filter.documentType}
            onChange={e => {
              setFilter({ ...filter, documentType: e.target.value })
            }}
            className={`peer w-full border solid border-[#ABB9C780] rounded-md h-[56px] outline-none placeholder-transparent focus:outline-none  text-base px-4 appearance-none ${
              filter?.documentType === ''
                ? 'first:text-[#ABB9C7] pt-0'
                : 'text-[#413E4D] pt-3'
            }`}
          >
            <option value=''>Tipo doc.</option>
            <option value='dni'>DNI</option>
            <option value='cc'>Cédula</option>
          </select>
          <label
            htmlFor='documentType'
            className={`absolute ${
              filter?.documentType === '' ? 'hidden' : 'block'
            } left-4 top-[6px] text-[#ABB9C7] text-[12px] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-[#ABB9C7] peer-placeholder-shown:top-[16px] peer-focus:top-[6px] peer-focus:text-[12px]`}
          >
            Tipo doc.
          </label>
          <div
            className={`absolute inset-y-0 right-0 flex items-center  px-3 pointer-events-none ${
              filter?.documentType === '' ? 'pt-0' : 'pt-2'
            }`}
          >
            <BsChevronDown className='text-[#DD3542] text-2xl' />
          </div>
        </div>
        <div className='relative w-full max-w-[272px]'>
          <input
            type='text'
            id='document'
            name='document'
            value={filter.document}
            onChange={e => {
              const res = /^[a-zA-Z0-9]+$/
              if (e.target.value === '' || res.test(e.target.value)) {
                setFilter({ ...filter, document: e.target.value })
              }
            }}
            placeholder='Número de documento'
            className='peer w-full border solid border-[#ABB9C780] rounded-md h-[56px] outline-none placeholder-transparent focus:outline-none text-[#413E4D] text-base px-4 pt-3'
          />
          <label
            htmlFor='document'
            className='absolute left-4 top-[6px] text-[#ABB9C7] text-[12px] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-[#ABB9C7] peer-placeholder-shown:top-[16px] peer-focus:top-[6px] peer-focus:text-[12px]'
          >
            Número de documento
          </label>
        </div>
        <div className='relative w-full max-w-[272px]'>
          <input
            type='text'
            id='numberDisbursement'
            name='numberDisbursement'
            value={filter.numberDisbursement}
            onChange={e => {
              const res = /^[a-zA-Z0-9]+$/
              if (e.target.value === '' || res.test(e.target.value)) {
                setFilter({ ...filter, numberDisbursement: e.target.value })
              }
            }}
            placeholder='Número de desembolso'
            className='peer w-full border solid border-[#ABB9C780] rounded-md h-[56px] outline-none placeholder-transparent focus:outline-none text-[#413E4D] text-base px-4 pt-3'
          />
          <label
            htmlFor='numberDisbursement'
            className='absolute left-4 top-[6px] text-[#ABB9C7] text-[12px] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-[#ABB9C7] peer-placeholder-shown:top-[16px] peer-focus:top-[6px] peer-focus:text-[12px]'
          >
            Número de desembolso
          </label>
        </div>
        <div className='relative w-full max-w-[272px]'>
          <input
            type={formatDateStart}
            id='dateStart'
            name='dateStart'
            value={filter.dateStart}
            onChange={e => {
              setFilter({
                ...filter,
                dateStart: e.target.value
              })
              setFormatDateStart('date')
            }}
            onBlur={() => {
              setFormatDateStart('text')
            }}
            onFocus={() => {
              setFormatDateStart('date')
            }}
            placeholder='Número de desembolso'
            className='peer w-full border solid border-[#ABB9C780] rounded-md h-[56px] outline-none placeholder-transparent focus:outline-none text-[#413E4D] text-base px-4 pt-3'
          />
          <label
            htmlFor='dateStart'
            className='absolute left-4 top-[6px] text-[#ABB9C7] text-[12px] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-[#ABB9C7] peer-placeholder-shown:top-[16px] peer-focus:top-[6px] peer-focus:text-[12px]'
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
            value={filter.dateEnd}
            onChange={e => {
              setFilter({
                ...filter,
                dateEnd: e.target.value
              })
              setFormatDateEnd('date')
            }}
            onBlur={() => {
              setFormatDateEnd('text')
            }}
            onFocus={() => {
              setFormatDateEnd('date')
            }}
            placeholder='Número de desembolso'
            className='peer w-full border solid border-[#ABB9C780] rounded-md h-[56px] outline-none placeholder-transparent focus:outline-none text-[#413E4D] text-base px-4 pt-3 appearance-none'
          />
          <label
            htmlFor='dateEnd'
            className='absolute left-4 top-[6px] text-[#ABB9C7] text-[12px] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-[#ABB9C7] peer-placeholder-shown:top-[16px] peer-focus:top-[6px] peer-focus:text-[12px]'
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
