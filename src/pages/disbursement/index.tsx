import useSWR from 'swr'
import { useState, useEffect } from 'react'
import { Layout } from '@/component/Layout'
import { useForm } from 'src/hooks/useForm'
import { Filter } from '@/component/Filter'
import { TfiDownload } from 'react-icons/tfi'
import { Pagination, Table } from '@/component/Table'

const Disbursement = (): JSX.Element => {
  const { values, setValues } = useForm({
    dateEnd: '',
    dateStart: '',
    document: '',
    typeDocument: '',
    numberDisbursement: ''
  })

  const [pagination, setPagination] = useState({
    skip: 1,
    limit: 10,
    totalRows: 0,
    totalPages: 0
  })

  const headers = [
    {
      title: 'Fecha y hora',
      dataIndex: 'daytime',
      className: 'text-sm py-4 text-start font-bold text-[#413E4D] pl-[72px]'
    },
    {
      title: 'Número de desembolso',
      dataIndex: 'numberDisbursement',
      className: 'text-sm py-4 text-start font-bold text-[#413E4D]'
    },
    {
      title: 'Tipo de documento',
      dataIndex: 'typeDocument',
      className: 'text-sm py-4 text-start font-bold text-[#413E4D]'
    },
    {
      title: 'Número de documento',
      dataIndex: 'document',
      className: 'text-sm py-4 text-start font-bold text-[#413E4D]'
    },
    {
      title: 'Monto',
      dataIndex: 'amount',
      className: 'text-sm py-4 text-start font-bold text-[#413E4D]'
    }
  ]

  const { data } = useSWR(
    `/api/disbursement?skip=${pagination.skip}&limit=${pagination.limit}&${new URLSearchParams({ ...values })}`,
    async (url: string) => await fetch(url).then(async res => await res.json())
  )

  useEffect(() => {
    if (data) {
      setPagination({
        skip: data.skip,
        limit: data.limit,
        totalRows: data.totalRows,
        totalPages: data.totalPages
      })
    }
  }, [data])

  return (
    <Layout>
      <div className='px-[72px] py-[20px] flex justify-between items-center'>
        <h1 className='text-[#413E4D] font-bold text-xl'>Mis desembolsos</h1>
        <button className='flex items-center bg-[#DD3542] text-white py-[14px] w-full max-w-[176px] justify-center gap-3 rounded-3xl font-bold'>
          <TfiDownload className='text-white text-2xl' />
          Descargar
        </button>
      </div>
      <Filter filter={values} setFilter={setValues} />
      <Table headers={headers} data={data?.disbursement} />
      <Pagination pagination={pagination} setPagination={
        setPagination
      }/>
    </Layout>
  )
}

export default Disbursement
