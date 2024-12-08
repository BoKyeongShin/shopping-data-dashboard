import { Center, StyleProps, Text } from '@chakra-ui/react'
import { EmptyBoxOpenIcon } from '../../assets/icons'

type EmptyFallbackProps = StyleProps & {
  title?: string
  description?: string
}
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
