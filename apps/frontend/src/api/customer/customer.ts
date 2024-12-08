import Axios from '..'
import { FetchCustomersApiParam, FetchCustomersApiResponse } from '../../typedef/customer'

export const fetchCustomersApi = async (params?: FetchCustomersApiParam) => {
  const { data } = await Axios.get<FetchCustomersApiResponse>('/api/customers', { params })
  return data
}
export const fetchCustomerPurchasesApi = async (id: number) => {
  const res = await Axios.get(`/api/customer/${id}/purchases`)
  return res.data
}
