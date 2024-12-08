import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { fetchCustomersApi } from '../api/customer/customer'
import { FetchCustomersApiParam, FetchCustomersApiResponse } from '../typedef/customer'

export const getCustomersQueryKey = (payload?: FetchCustomersApiParam) => {
  return ['fetch-customers', payload]
}

export const useFetchCustomersQuery = <TData = FetchCustomersApiResponse>(
  payload?: FetchCustomersApiParam,
  options?: UseQueryOptions<FetchCustomersApiResponse, AxiosError, TData>,
) => {
  return useQuery<FetchCustomersApiResponse, AxiosError, TData>({
    queryKey: getCustomersQueryKey(payload),
    queryFn: () => fetchCustomersApi(payload),
    ...options,
  })
}
