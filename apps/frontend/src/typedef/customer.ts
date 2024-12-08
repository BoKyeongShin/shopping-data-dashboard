import { Purchase } from './purchase'

export type FetchCustomersApiResponse = Customer[]

export interface Customer {
  id: number
  name: string
  count: number
  totalAmount: number
}

export interface FetchCustomersApiParam {
  sortBy?: 'asc' | 'desc'
  name?: string
}

export type FetchCustomerPurchasesApiResponse = Purchase[]
