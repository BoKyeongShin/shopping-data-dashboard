import { Box, Button, Text } from '@chakra-ui/react'
import { EmptyBoxOpenIcon } from '../../assets/icons'

interface ErrorFallbackProps {
  isLoading?: boolean
  onRefresh: () => void
}
/**
 * @description 오류가 발생하거나 검색 결과가 없을 때 사용자에게 시각적 피드백을 제공하는 컴포넌트입니다.
 * 새로고침 버튼을 통해 사용자가 다시 시도할 수 있도록 지원합니다.
 * `isLoading` 상태를 활용해 버튼에 로딩 표시를 추가할 수 있습니다.
 */
export const ErrorFallback: React.FC<ErrorFallbackProps> = ({ isLoading, onRefresh }) => {
  return (
    <Box textAlign="center" mt={4}>
      <EmptyBoxOpenIcon fontSize="64px" color="gray.700" />
      <Text fontSize="lg" color="gray.500">
        검색 결과를 찾을 수 없습니다.
      </Text>
      <Button mt={2} isLoading={isLoading} onClick={onRefresh}>
        새로고침
      </Button>
    </Box>
  )
}
