import { AbsoluteCenter, Flex, FlexProps, Spinner } from '@chakra-ui/react'
import { Suspense } from 'react'
import { CustomerTableContent } from './CustomerTableContent'

interface CustomerTableSectionProps extends FlexProps {}
/**
 * @description `Suspense`를 활용하여 로딩 상태를 처리하며, 로딩 중에는 중앙에 스피너를 표시하는 고객 테이블 섹션의 전체 레이아웃을 담당하는 컴포넌트입니다.
 */
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
