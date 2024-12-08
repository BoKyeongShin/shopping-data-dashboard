import { Box, useDisclosure } from '@chakra-ui/react'
import { CustomerDataModal } from '../CustomerDataModal/CustomerDataModal'
import { CustomerTable } from './CustomerTable'

export const CustomerTableSection = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const handleOpenModal = () => {
    onOpen()
  }
  return (
    <Box>
      <CustomerTable onClickRow={handleOpenModal} />
      <CustomerDataModal isOpen={isOpen} onClose={onClose} />
    </Box>
  )
}
