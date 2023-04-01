import {
  type RowProps,
  type TableProps,
  type PaginationProps
} from '@/type/table'
import { BsChevronDown } from 'react-icons/bs'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

export const Table: React.FC<TableProps> = ({ headers, data }) => {
  return (
    <div className='relative'>
      <div className='overflow-x-auto w-full'>
        <table className='w-full table-auto'>
          <thead>
            <tr>
              {headers?.length > 0 &&
                headers?.map((item, index: number) => {
                  return (
                    <th
                      key={`headers ${index}`}
                      className={`bg-[#F1F6FB] ${item?.className}`}
                    >
                      {item?.title}
                    </th>
                  )
                })}
            </tr>
          </thead>
          <tbody>
            {data?.length > 0 &&
              data?.map((item, index: number) => {
                return (
                  <RowTable
                    item={item}
                    index={index}
                    headers={headers}
                    key={`row ${index}`}
                  />
                )
              })}
          </tbody>
        </table>
      </div>
      <Pagination skip={1} limit={10} totalRows={20} />
    </div>
  )
}

export const RowTable: React.FC<RowProps> = ({ headers, item, index }) => {
  return (
    <tr className={`${index % 2 === 0 ? 'bg-white' : 'bg-table-header'}`}>
      {headers?.length > 0 &&
        headers?.map((key, index: number) => {
          if (key?.render != null) {
            return <td key={`${index}`}>{key?.render(item)}</td>
          } else {
            return (
              <td
                key={`dataIndex ${index}`}
                className={`text-sm text-left border-b border-gray-200 first:pl-[72px] last:pr-[72px] py-4 text-[#8E8E8E]
                      ${key?.dataIndex === 'amount' ? 'font-bold' : ''}`}
              >
                {item[key?.dataIndex] ? item[key?.dataIndex] : '-'}
              </td>
            )
          }
        })}
    </tr>
  )
}

export const Pagination: React.FC<PaginationProps> = ({
  skip,
  limit,
  totalRows
}) => {
  return (
    <div className='absolute bottom-0 w-full flex justify-center'>
      <div className='bg-white shadow-pagination flex min-w-[508px] px-6 py-4 border solid border-[#ABB9C780] rounded-t-3xl'>
        <div className='flex gap-4 items-center'>
          <MdKeyboardArrowLeft className='text-[#DD3542] text-2xl' />
          <div className='border solid border-[#ABB9C780] rounded-md  flex items-center w-[48px] h-[48px] justify-center'>
            <span className='text-[#414141]'>{skip}</span>
          </div>
          <span className='text-[#414141]'>de {totalRows}</span>
          <MdKeyboardArrowRight className='text-[#DD3542] text-2xl' />
        </div>
        <form noValidate className='w-full max-w-[260px]'>
          <div className='relative w-full max-w-[260px]'>
            <select
              id='records'
              name='records'
              placeholder='Registros por página'
              // value={filter.typeDocument}
              // onChange={e => {
              //   setFilter({ ...filter, typeDocument: e.target.value })
              // }}
              className='peer w-full border solid border-[#ABB9C780] rounded-md h-[56px] outline-none placeholder-transparent focus:outline-none text-[#413E4D] text-base px-4 pt-3 appearance-none'
            >
              {Array(totalRows)
                .fill(1)
                .map((item, index) => {
                  return (
                    <option key={`option ${index}`} value={index + 1}>
                      {index + 1}
                    </option>
                  )
                })}
            </select>
            <label
              htmlFor='records'
              className='absolute left-4 top-[5px] text-[#ABB9C7] text-[12px] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-[#ABB9C7] peer-placeholder-shown:top-[16px] peer-focus:-top-0 peer-focus:text-[12px]'
            >
              Registros por página
            </label>
            <div className='absolute inset-y-0 right-0 flex items-center pt-2 px-3 pointer-events-none'>
              <BsChevronDown className='text-[#DD3542] text-2xl' />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
