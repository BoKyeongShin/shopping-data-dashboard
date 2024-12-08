import { Skeleton, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { PURCHASE_HEADER } from '../../constant/purchase'

const SKELETONS = Array.from({ length: 3 })
const HEIGHT = '50px'

/**
 * @description 구매 내역 테이블의 로딩 상태를 나타내는 스켈레톤 컴포넌트입니다.
 * - 테이블 헤더와 스켈레톤 로딩 행을 렌더링합니다.
 */
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
