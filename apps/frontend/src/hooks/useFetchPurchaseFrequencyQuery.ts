import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { fetchPurchaseFrequencyApi } from '../api/purchase/purchase'
import { FetchPurchaseFrequencyApiParam, FetchPurchaseFrequencyApiResponse } from '../typedef/purchase'

export const getPurchaseFrequencyQueryKey = (payload?: FetchPurchaseFrequencyApiParam) => {
  return ['fetch-purchase-frequency', payload]
}

export const useFetchPurchaseFrequencyQuery = <TData = FetchPurchaseFrequencyApiResponse>(
  payload?: FetchPurchaseFrequencyApiParam,
  options?: UseQueryOptions<FetchPurchaseFrequencyApiResponse, AxiosError, TData>,
) => {
  return useQuery<FetchPurchaseFrequencyApiResponse, AxiosError, TData>({
    queryKey: getPurchaseFrequencyQueryKey(payload),
    queryFn: () => fetchPurchaseFrequencyApi(payload),
    ...options,
  })
}
