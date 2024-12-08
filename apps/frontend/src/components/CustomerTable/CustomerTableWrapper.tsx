import { useFetchCustomersQuery } from '../../hooks/useFetchCustomersQuery'
import { Customer, SortBy } from '../../typedef/customer'
import { CustomerTable } from './CustomerTable'

interface CustomerTableWrapperProps {
  filterName: string
  sortBy?: SortBy
  onSortToggle: () => void
  onClickRow: (customer: Customer) => void
}

/**
 * @description 고객 데이터를 쿼리하여 테이블에 렌더링하는 래퍼 컴포넌트입니다.
 * `Suspense`를 지원하는 `useFetchCustomersQuery`를 통해 데이터를 가져옵니다.
 */
export const CustomerTableWrapper: React.FC<CustomerTableWrapperProps> = ({
  filterName,
  sortBy,
  onSortToggle,
  onClickRow,
}) => {
  const { data: customers = [] } = useFetchCustomersQuery(
    { sortBy, name: filterName || undefined },
    {
      suspense: true,
      onError: (error) => {
        console.log('An error occurred:', error.message)
      },
    },
  )
  return <CustomerTable customers={customers} sortBy={sortBy} onSortToggle={onSortToggle} onClickRow={onClickRow} />
}
