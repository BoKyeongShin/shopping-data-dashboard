import { Skeleton, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { CUSTOMER_HEADER } from '../../constant/customer'

const SKELETONS = Array.from({ length: 3 })
const HEIGHT = '50px'

export const CustomerTableSkeleton = () => {
  return (
    <Table>
      <Thead>
        <Tr>
          {CUSTOMER_HEADER.map((title) => (
            <Th key={title}>{title}</Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {SKELETONS.map((_skeleton, index) => (
          <Tr key={index}>
            <Td colSpan={4}>
              <Skeleton w="full" height={HEIGHT} />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}