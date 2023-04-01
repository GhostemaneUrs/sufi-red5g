interface Headers {
  title: string
  dataIndex: string
  className?: string
}

type Rows = Record<string, string>

export interface RowProps {
  item: Rows
  index: number
  headers: Array<{
    dataIndex: string
    render?: (item: object) => React.ReactNode
  }>
}

export interface TableProps {
  headers: Headers[]
  data: Array<Record<string, string | number | date>>
}

export interface PaginationProps {
  skip: number
  limit: number
  totalRows: number
}
