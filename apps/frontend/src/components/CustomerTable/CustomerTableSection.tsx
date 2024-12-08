import { Box, useDisclosure } from '@chakra-ui/react'
import { useCallback, useState } from 'react'
import { useFetchCustomersQuery } from '../../hooks/useFetchCustomersQuery'
import { Customer, SortBy } from '../../typedef/customer'
import { CustomerDataModal } from '../CustomerDataModal/CustomerDataModal'
import { CustomerTable } from './CustomerTable'

export const CustomerTableSection = () => {
  const [targetCustomer, setTargetCustomer] = useState<Customer | null>(null)
  const [sortBy, setSortBy] = useState<SortBy | undefined>(undefined)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const { data: customers = [] } = useFetchCustomersQuery({ sortBy: sortBy ? sortBy : undefined }, { suspense: true })

  const handleOpenModal = useCallback(
    (customer: Customer) => {
      onOpen()
      setTargetCustomer(customer)
    },
    [onOpen],
  )

  const handleToggleSort = () => {
    setSortBy((prev) => {
      if (prev === 'asc') return 'desc' // asc → desc
      if (prev === 'desc') return undefined // desc → undefined
      return 'asc' // undefined → asc
    })
  }

  return (
    <Box>
      <CustomerTable
        customers={customers}
        sortBy={sortBy}
        onSortToggle={handleToggleSort}
        onClickRow={handleOpenModal}
      />
      <CustomerDataModal isOpen={isOpen} customer={targetCustomer} onClose={onClose} />
    </Box>
  )
}
