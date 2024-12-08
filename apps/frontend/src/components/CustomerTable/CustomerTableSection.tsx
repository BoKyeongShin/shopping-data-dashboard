import { Box, useDisclosure } from '@chakra-ui/react'
import { useCallback, useState } from 'react'
import { useFetchCustomersQuery } from '../../hooks/useFetchCustomersQuery'
import { Customer } from '../../typedef/customer'
import { CustomerDataModal } from '../CustomerDataModal/CustomerDataModal'
import { CustomerTable } from './CustomerTable'

export const CustomerTableSection = () => {
  const [targetCustomer, setTargetCustomer] = useState<Customer | null>(null)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const { data: customers = [] } = useFetchCustomersQuery({}, { suspense: true })

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
      <CustomerDataModal isOpen={isOpen} customer={targetCustomer} onClose={onClose} />
    </Box>
  )
}
