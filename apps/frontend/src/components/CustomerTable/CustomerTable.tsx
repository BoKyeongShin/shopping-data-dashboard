import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'

interface CustomerTableProps {
  onClickRow: () => void
}
export const CustomerTable: React.FC<CustomerTableProps> = ({ onClickRow }) => {
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
          <Tr _hover={{ cursor: 'pointer' }} onClick={onClickRow}>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td isNumeric>2</Td>
            <Td isNumeric>10</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  )
}
