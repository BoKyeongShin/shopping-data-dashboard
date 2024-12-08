import { Skeleton, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { PURCHASE_HEADER } from '../../constant/purchase'

const SKELETONS = Array.from({ length: 3 })
const HEIGHT = '50px'

export const PurchasesSkeleton = () => {
  return (
    <Table>
      <Thead>
        <Tr>
          {PURCHASE_HEADER.map((title) => (
            <Th>{title}</Th>
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
