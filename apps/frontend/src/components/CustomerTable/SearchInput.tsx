import { Input, InputProps } from '@chakra-ui/react'
import { useCallback, useRef, useState } from 'react'

interface SearchInputProps extends InputProps {
  onUpdateValue: (value: string) => void
}
/**
 * @description 사용자의 입력값을 받아 디바운스 처리를 통해 부모 컴포넌트에 전달하는 검색 입력 컴포넌트입니다.
 */
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
