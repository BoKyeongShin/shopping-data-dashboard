import { Flex, Image, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import { PURCHASE_HEADER } from '../../constant/purchase'
import { useFetchCustomerPurchasesQuery } from '../../hooks/useFetchCustomerPurchasesQuery'
import { formatToKRW } from '../../services/money'
import { Customer } from '../../typedef/customer'

interface PurchasesContentProps {
  customer: Customer
}

/**
 * @description 특정 고객의 구매 내역을 테이블 형태로 렌더링하는 컴포넌트입니다.
 * `Suspense`를 활용한 로딩 상태를 지원하고, `useFetchCustomerPurchasesQuery`를 통해 구매 데이터를 가져옵니다.
 * 데이터는 날짜, 가격, 상품 이름 및 이미지, 구매 수량으로 구성됩니다.
 */
export const PurchasesContent: React.FC<PurchasesContentProps> = ({ customer }) => {
  const { data: purchases = [] } = useFetchCustomerPurchasesQuery(customer?.id, {
    suspense: true,
    enabled: !!customer,
  })
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
        {purchases.map((purchase) => (
          <Tr key={purchase.date}>
            <Td>{purchase.date}</Td>
            <Td>{formatToKRW(purchase.price)}</Td>
            <Td>
              <Flex>
                {purchase.product}
                <Image
                  boxSize="50px"
                  objectFit="cover"
                  borderRadius="15px"
                  src={purchase.imgSrc}
                  alt={purchase.product}
                />
              </Flex>
            </Td>
            <Td>{purchase.quantity}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}
