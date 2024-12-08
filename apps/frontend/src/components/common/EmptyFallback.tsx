import { Center, StyleProps, Text } from '@chakra-ui/react'
import { EmptyBoxOpenIcon } from '../../assets/icons'

type EmptyFallbackProps = StyleProps & {
  title?: string
  description?: string
}

/**
 * @description 데이터가 없거나 검색 결과가 없을 때 사용자에게 시각적 피드백을 제공하는 컴포넌트입니다.
 * 제목(`title`)과 설명(`description`)을 전달받아 동적으로 내용을 표시합니다.
 * Chakra UI의 스타일 속성을 통해 추가 커스터마이징 가능합니다.
 */
export const EmptyFallback = ({ title = 'No results found', description, ...props }: EmptyFallbackProps) => {
  return (
    <Center
      flexDir="column"
      maxW="full"
      minW="fit-content"
      maxH="full"
      p={5}
      whiteSpace="pre-line"
      textAlign="center"
      {...props}
    >
      <EmptyBoxOpenIcon fontSize="64px" color="gray.700" />

      {title && (
        <Text textStyle="2xl-600" mt={4} color="gray.700">
          {title}
        </Text>
      )}

      {description && (
        <Text textStyle="md-400" color="gray.600" mt={6}>
          {description}
        </Text>
      )}
    </Center>
  )
}
