import db from 'db.json'
import type { NextApiRequest, NextApiResponse } from 'next'
import { type DisbursementResponse } from '@/type/disbursement'

export const disbursements = async (
  req: NextApiRequest,
  res: NextApiResponse<DisbursementResponse>
): Promise<void> => {
  const obj: DisbursementResponse = {
    data: db.data,
    skip: 1,
    limit: 10,
    totalRows: db.data.length
  }
  res.status(200).json(obj)
}
