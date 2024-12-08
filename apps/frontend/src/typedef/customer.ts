import { Purchase } from './purchase'

export type FetchCustomersApiResponse = Customer[]

export interface Customer {
  id: number
  name: string
  count: number
  totalAmount: number
}

export type SortBy = 'asc' | 'desc'
export interface FetchCustomersApiParam {
  sortBy?: SortBy
  name?: string
}

export type FetchCustomerPurchasesApiResponse = Purchase[]
