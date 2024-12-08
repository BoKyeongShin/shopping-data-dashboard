import Axios from '..'
import { FetchPurchaseFrequencyApiParam, FetchPurchaseFrequencyApiResponse } from '../../typedef/purchase'

export const fetchPurchaseFrequencyApi = async (params?: FetchPurchaseFrequencyApiParam) => {
  const { data } = await Axios.get<FetchPurchaseFrequencyApiResponse>('/api/purchase-frequency', { params })
  return data
}
