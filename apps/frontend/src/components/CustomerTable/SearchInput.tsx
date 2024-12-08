import { Input, InputProps } from '@chakra-ui/react'
import { useCallback, useRef, useState } from 'react'

interface SearchInputProps extends InputProps {
  onUpdateValue: (value: string) => void
}
export const SearchInput: React.FC<SearchInputProps> = ({ onUpdateValue, ...props }) => {
  const [inputValue, setInputValue] = useState<string>('')
  const debounceTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleFilterChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.trim()
      setInputValue(value)

      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current)
      }

      debounceTimeout.current = setTimeout(() => {
        onUpdateValue(value)
      }, 300)
    },
    [onUpdateValue],
  )

  return <Input placeholder="입력하세요" value={inputValue} onChange={handleFilterChange} {...props} />
}
