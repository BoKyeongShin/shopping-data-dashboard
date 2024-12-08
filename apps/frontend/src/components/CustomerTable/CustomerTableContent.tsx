import { Box, useDisclosure } from '@chakra-ui/react'
import { Suspense, useCallback, useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Customer, SortBy } from '../../typedef/customer'
import { ErrorFallback } from '../common/ErrorFallback'
import { CustomerDataModal } from '../CustomerDataModal/CustomerDataModal'
import { CustomerTableSkeleton } from './CustomerTableSkeleton'
import { CustomerTableWrapper } from './CustomerTableWrapper'
import { SearchInput } from './SearchInput'

/**
 * @description 고객 테이블의 상위 컨테이너로, 검색 및 정렬 기능을 포함하는 컴포넌트입니다.
 * 고객 이름으로 필터링하는 검색 입력 필드를 제공합니다.
 * 정렬 기능을 통해 고객 데이터를 오름차순, 내림차순, 기본 상태로 토글합니다.
 */
export const CustomerTableContent = () => {
  const [targetCustomer, setTargetCustomer] = useState<Customer | null>(null)
  const [sortBy, setSortBy] = useState<SortBy | undefined>(undefined)
  const [filterName, setFilterName] = useState<string>('')
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleOpenModal = useCallback(
    (customer: Customer) => {
      onOpen()
      setTargetCustomer(customer)
    },
    [onOpen],
  )

  const handleToggleSort = useCallback(() => {
    setSortBy((prev) => {
      if (prev === 'asc') return 'desc' // asc → desc
      if (prev === 'desc') return undefined // desc → undefined
      return 'asc' // undefined → asc
    })
  }, [])

  const handleFilterChange = useCallback((name: string) => {
    setFilterName(name)
  }, [])

  return (
    <Box w="full" overflowY="auto">
      <SearchInput placeholder="이름을 입력하세요" mb={4} onUpdateValue={handleFilterChange} />
      <ErrorBoundary fallbackRender={({ resetErrorBoundary }) => <ErrorFallback onRefresh={resetErrorBoundary} />}>
        <Suspense fallback={<CustomerTableSkeleton />}>
          <CustomerTableWrapper
            filterName={filterName}
            sortBy={sortBy}
            onSortToggle={handleToggleSort}
            onClickRow={handleOpenModal}
          />
        </Suspense>
      </ErrorBoundary>
      <CustomerDataModal isOpen={isOpen} customer={targetCustomer} onClose={onClose} />
    </Box>
  )
}
