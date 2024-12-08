import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons'
import { Button, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { CUSTOMER_HEADER } from '../../constant/customer'
import { formatToKRW } from '../../services/money'
import { Customer, SortBy } from '../../typedef/customer'

interface CustomerTableProps {
  customers: Customer[]
  sortBy?: SortBy
  onSortToggle: () => void
  onClickRow: (customer: Customer) => void
}

export const CustomerTable: React.FC<CustomerTableProps> = ({ customers, sortBy, onSortToggle, onClickRow }) => {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            {CUSTOMER_HEADER.map((title) => (
              <Th key={title}>
                {title === '총 구매 금액' ? (
                  <Button
                    variant="ghost"
                    rightIcon={sortBy === 'asc' ? <ArrowUpIcon /> : sortBy === 'desc' ? <ArrowDownIcon /> : undefined}
                    onClick={onSortToggle}
                  >
                    {title}
                  </Button>
                ) : (
                  title
                )}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {customers.map((customer) => {
            return (
              <Tr key={customer.id} _hover={{ cursor: 'pointer' }} onClick={() => onClickRow(customer)}>
                <Td>{customer.id}</Td>
                <Td>{customer.name}</Td>
                <Td>{customer.count}</Td>
                <Td>{formatToKRW(customer.totalAmount)}</Td>
              </Tr>
            )
          })}
        </Tbody>
      </Table>
    </TableContainer>
  )
}
