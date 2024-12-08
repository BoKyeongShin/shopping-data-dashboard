import { Flex, Image, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import { PURCHASE_HEADER } from '../../constant/purchase'
import { useFetchCustomerPurchasesQuery } from '../../hooks/useFetchCustomerPurchasesQuery'
import { formatToKRW } from '../../services/money'
import { Customer } from '../../typedef/customer'

interface PurchasesContentProps {
  customer: Customer
}

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
