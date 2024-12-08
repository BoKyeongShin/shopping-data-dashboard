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

/**
 * @description 고객 데이터를 테이블 형태로 렌더링하는 컴포넌트입니다.
 * 고객 ID, 이름, 구매 횟수, 총 구매 금액을 표시합니다.
 * 총 구매 금액 열은 정렬 기능을 지원하며, 정렬 상태에 따라 아이콘으로 시각적 표시를 제공합니다.
 * 각 행은 클릭 이벤트를 지원하며, 이를 통해 고객 상세 정보를 열람할 수 있습니다.
 */
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
