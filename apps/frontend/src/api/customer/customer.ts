import Axios from '..'
import {
  FetchCustomerPurchasesApiResponse,
  FetchCustomersApiParam,
  FetchCustomersApiResponse,
} from '../../typedef/customer'

export const fetchCustomersApi = async (params?: FetchCustomersApiParam) => {
  const { data } = await Axios.get<FetchCustomersApiResponse>('/api/customers', { params })
  return data
}
export const fetchCustomerPurchasesApi = async (id: number) => {
  const { data } = await Axios.get<FetchCustomerPurchasesApiResponse>(`/api/customers/${id}/purchases`)
  return data
}
