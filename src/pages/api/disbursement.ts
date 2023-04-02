import db from 'db.json'
import moment from 'moment'
import type { NextApiRequest, NextApiResponse } from 'next'
import { type DisbursementResponse } from '@/type/disbursement'

const disbursements = async (
  req: NextApiRequest,
  res: NextApiResponse<DisbursementResponse>
): Promise<void> => {
  const { skip, limit, ...filter } = req.query

  let dbLocal = db.disbursement
  if (filter?.document && String(filter?.document)?.trim() !== '') {
    dbLocal = dbLocal.filter(item =>
      item.document.includes(String(filter?.document))
    )
  }

  if (filter?.documentType && String(filter?.documentType)?.trim() !== '') {
    dbLocal = dbLocal.filter(item =>
      item.documentType.includes(String(filter?.documentType))
    )
  }

  if (filter?.amount && String(filter?.amount)?.trim() !== '') {
    dbLocal = dbLocal.filter(item =>
      item.amount.includes(String(filter?.amount))
    )
  }

  if (
    filter?.numberDisbursement &&
    String(filter?.numberDisbursement)?.trim() !== ''
  ) {
    dbLocal = dbLocal.filter(item =>
      item.numberDisbursement.includes(String(filter?.numberDisbursement))
    )
  }

  if (filter?.dateStart && String(filter?.dateStart)?.trim() !== '') {
    const startDate = moment(filter?.dateStart).format('DD-MM-YYYY')
    dbLocal = dbLocal.filter(
      item => moment(item?.dayTime).format('DD-MM-YYYY') >= startDate
    )
  }

  if (filter?.dateEnd && String(filter?.dateEnd)?.trim() !== '') {
    const endDate = moment(filter?.dateEnd)
      .set({
        hour: 23,
        minute: 59,
        second: 59,
        millisecond: 59
      })
      .format('DD-MM-YYYY')
    dbLocal = dbLocal.filter(
      item => moment(item?.dayTime).format('DD-MM-YYYY') <= endDate
    )
  }

  const obj: DisbursementResponse = {
    skip: Number(skip ?? 1),
    limit: Number(limit ?? 5),
    totalRows: dbLocal.length,
    totalPages: Math.ceil(dbLocal.length / Number(limit ?? 5)),
    disbursement: dbLocal.slice(
      Number(skip) - 1,
      Number(skip) + Number(limit ?? 5) - 1
    )
  }

  res.status(200).json(obj)
}

export default disbursements
