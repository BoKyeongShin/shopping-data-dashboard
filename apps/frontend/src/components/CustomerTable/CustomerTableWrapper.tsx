import { useFetchCustomersQuery } from '../../hooks/useFetchCustomersQuery'
import { Customer, SortBy } from '../../typedef/customer'
import { CustomerTable } from './CustomerTable'

interface CustomerTableWrapperProps {
  filterName: string
  sortBy?: SortBy
  onSortToggle: () => void
  onClickRow: (customer: Customer) => void
}

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
