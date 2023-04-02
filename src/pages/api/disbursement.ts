import db from 'db.json'
import type { NextApiRequest, NextApiResponse } from 'next'
import { type DisbursementResponse } from '@/type/disbursement'

const disbursements = async (
  req: NextApiRequest,
  res: NextApiResponse<DisbursementResponse>
): Promise<void> => {
  const { skip, limit, ...filter } = req.query

  let dbLocal = db.disbursement
  if (filter?.document && String(filter?.document)?.trim() !== '') {
    dbLocal = dbLocal.filter((item) => item.document.includes(String(filter?.document)))
  }

  if (filter?.typeDocument && String(filter?.typeDocument)?.trim() !== '') {
    dbLocal = dbLocal.filter((item) => item.typeDocument.includes(String(filter?.typeDocument)))
  }

  if (filter?.amount && String(filter?.amount)?.trim() !== '') {
    dbLocal = dbLocal.filter((item) => item.amount.includes(String(filter?.amount)))
  }

  if (filter?.numberDisbursement && String(filter?.numberDisbursement)?.trim() !== '') {
    dbLocal = dbLocal.filter((item) => item.numberDisbursement.includes(String(filter?.numberDisbursement))
    )
  }

  // if (filter?.daytime && String(filter?.daytime)?.trim() !== '') {
  //   dbLocal = dbLocal.filter((item) => item.daytime.includes(String(filter?.daytime)))
  // }

  const obj: DisbursementResponse = {
    skip: Number(skip ?? 1),
    limit: Number(limit ?? 5),
    totalRows: dbLocal.length,
    totalPages: Math.ceil(dbLocal.length / Number(limit ?? 5)),
    disbursement: dbLocal.slice(Number(skip) - 1, Number(skip) + Number(limit ?? 5) - 1)
  }

  res.status(200).json(obj)
}

export default disbursements
