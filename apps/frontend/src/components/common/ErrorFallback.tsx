import { Box, Button, Text } from '@chakra-ui/react'
import { EmptyBoxOpenIcon } from '../../assets/icons'

interface ErrorFallbackProps {
  isLoading?: boolean
  onRefresh: () => void
}
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
