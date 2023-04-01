export interface Disbursement {
  id: string
  document: string
  typeDocument: string
  daytime: Date | string
  amount: string | number
  numberDisbursement: string
}

export interface DisbursementResponse {
  skip?: number
  limit?: number
  totalRows?: number
  data: Disbursement[]
}
