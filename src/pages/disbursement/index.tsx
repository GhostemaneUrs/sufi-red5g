import { Table } from '@/component/Table'
import { Layout } from '@/component/Layout'
import { useForm } from 'src/hooks/useForm'
import { Filter } from '@/component/Filter'
import { TfiDownload } from 'react-icons/tfi'

const Disbursement = (): JSX.Element => {
  const { values, setValues } = useForm({
    dateEnd: new Date(),
    dateStart: new Date(),
    document: '',
    typeDocument: '',
    numberDisbursement: ''
  })

  const rows = [
    {
      amount: '$ 1.000.000',
      typeDocument: 'Cédula',
      document: '1140903322',
      numberDisbursement: '123A4C',
      daytime: '2023-04-01T00:25:23.014Z'
    },
    {
      amount: '$ 1.000.000',
      typeDocument: 'Cédula',
      document: '1140903322',
      numberDisbursement: '123A4C',
      daytime: '2023-04-01T00:25:23.014Z'
    },
    {
      amount: '$ 1.000.000',
      typeDocument: 'Cédula',
      document: '1140903322',
      numberDisbursement: '123A4C',
      daytime: '2023-04-01T00:25:23.014Z'
    },
    {
      amount: '$ 1.000.000',
      typeDocument: 'Cédula',
      document: '1140903322',
      numberDisbursement: '123A4C',
      daytime: '2023-04-01T00:25:23.014Z'
    },
    {
      amount: '$ 1.000.000',
      typeDocument: 'Cédula',
      document: '1140903322',
      numberDisbursement: '123A4C',
      daytime: '2023-04-01T00:25:23.014Z'
    },
    {
      amount: '$ 1.000.000',
      typeDocument: 'Cédula',
      document: '1140903322',
      numberDisbursement: '123A4C',
      daytime: '2023-04-01T00:25:23.014Z'
    },
    {
      amount: '$ 1.000.000',
      typeDocument: 'Cédula',
      document: '1140903322',
      numberDisbursement: '123A4C',
      daytime: '2023-04-01T00:25:23.014Z'
    },
    {
      amount: '$ 1.000.000',
      typeDocument: 'Cédula',
      document: '1140903322',
      numberDisbursement: '123A4C',
      daytime: '2023-04-01T00:25:23.014Z'
    },
    {
      amount: '$ 1.000.000',
      typeDocument: 'Cédula',
      document: '1140903322',
      numberDisbursement: '123A4C',
      daytime: '2023-04-01T00:25:23.014Z'
    },
    {
      amount: '$ 1.000.000',
      typeDocument: 'Cédula',
      document: '1140903322',
      numberDisbursement: '123A4C',
      daytime: '2023-04-01T00:25:23.014Z'
    }
  ]

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
      <Table headers={headers} data={rows} />
    </Layout>
  )
}

export default Disbursement
