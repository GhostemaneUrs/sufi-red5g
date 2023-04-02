export interface Disbursement {
  id: string
  document: string
  documentType: string
  dayTime: Date | string
  amount: string | number
  numberDisbursement: string
}

export interface DisbursementResponse {
  skip: number
  limit: number
  totalRows: number
  totalPages: number
  disbursement: Disbursement[]
}
