import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { Customer } from '../../typedef/customer'

interface CustomerTableProps {
  customers: Customer[]
  onClickRow: (customer: Customer) => void
}
export const CustomerTable: React.FC<CustomerTableProps> = ({ customers, onClickRow }) => {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>고객 ID</Th>
            <Th>이름</Th>
            <Th isNumeric>구매 횟수</Th>
            <Th isNumeric>총 구매 금액</Th>
          </Tr>
        </Thead>
        <Tbody>
          {customers.map((customer) => {
            return (
              <Tr key={customer.id} _hover={{ cursor: 'pointer' }} onClick={() => onClickRow(customer)}>
                <Td>{customer.id}</Td>
                <Td>{customer.name}</Td>
                <Td isNumeric>{customer.count}</Td>
                <Td isNumeric>{customer.totalAmount}</Td>
              </Tr>
            )
          })}
        </Tbody>
      </Table>
    </TableContainer>
  )
}
