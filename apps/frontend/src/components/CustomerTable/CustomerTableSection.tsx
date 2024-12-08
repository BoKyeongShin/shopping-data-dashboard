import { AbsoluteCenter, Flex, FlexProps, Spinner } from '@chakra-ui/react'
import { Suspense } from 'react'
import { CustomerTableContent } from './CustomerTableContent'

interface CustomerTableSectionProps extends FlexProps {}
export const CustomerTableSection: React.FC<CustomerTableSectionProps> = ({ ...props }) => {
  return (
    <Flex w="full" overflow="hidden" {...props}>
      <Suspense
        fallback={
          <AbsoluteCenter>
            <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="gray.500" size="xl" />
          </AbsoluteCenter>
        }
      >
        <CustomerTableContent />
      </Suspense>
    </Flex>
  )
}
