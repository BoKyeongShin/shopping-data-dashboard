import { Box, useDisclosure } from '@chakra-ui/react'
import { useCallback, useEffect, useState } from 'react'
import { fetchCustomerPurchasesApi } from '../../api/customer/customer'
import { useFetchCustomerPurchasesQuery } from '../../hooks/useFetchCustomerPurchasesQuery'
import { useFetchCustomersQuery } from '../../hooks/useFetchCustomersQuery'
import { Customer } from '../../typedef/customer'
import { CustomerDataModal } from '../CustomerDataModal/CustomerDataModal'
import { CustomerTable } from './CustomerTable'

export const CustomerTableSection = () => {
  const [targetCustomer, setTargetCustomer] = useState<Customer | null>(null)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const { data: customers = [] } = useFetchCustomersQuery({}, { suspense: true })
  const { data: customerPurchanses = [] } = useFetchCustomerPurchasesQuery(targetCustomer?.id, {
    suspense: true,
    enabled: !!targetCustomer,
  })

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await fetchCustomerPurchasesApi(1)
        console.log(res)
      } catch (err) {
        console.log(err)
      }
    }
    fetch()
  }, [])

  const handleOpenModal = useCallback(
    (customer: Customer) => {
      onOpen()
      setTargetCustomer(customer)
    },
    [onOpen],
  )

  return (
    <Box>
      <CustomerTable customers={customers} onClickRow={handleOpenModal} />
      <CustomerDataModal isOpen={isOpen} customer={targetCustomer} purchases={customerPurchanses} onClose={onClose} />
    </Box>
  )
}
