import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { fetchCustomerPurchasesApi } from '../api/customer/customer'
import { FetchCustomerPurchasesApiResponse } from '../typedef/customer'

export const getCustomerPurchasesQueryKey = (payload: number | undefined) => {
  return ['fetch-customer-purchases', payload]
}

export const useFetchCustomerPurchasesQuery = <TData = FetchCustomerPurchasesApiResponse>(
  payload: number | undefined,
  options?: UseQueryOptions<FetchCustomerPurchasesApiResponse, AxiosError, TData>,
) => {
  return useQuery<FetchCustomerPurchasesApiResponse, AxiosError, TData>({
    queryKey: getCustomerPurchasesQueryKey(payload),
    queryFn: async () => {
      if (payload === undefined) {
        return Promise.reject(new Error('Payload is undefined'))
      }
      // test
      await new Promise((resolve) => setTimeout(resolve, 5000))
      return fetchCustomerPurchasesApi(payload)
    },
    ...options,
  })
}
