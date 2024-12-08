import { Button, Center, Flex, FlexProps, Input, Spinner } from '@chakra-ui/react'
import { Suspense, useState } from 'react'
import { PriceFrequencyChart } from './PriceFrequencyChart'

const GAP = 4
const INPUT_HEIGHT = 40 + 4 * GAP

interface PriceFrequencyChartSectionProps extends FlexProps {}

/**
 * @description 사용자 입력으로 시작 및 종료 날짜를 설정하여 그 기간 동안 데이터를 보여주는 차트가 포함되어 있습니다.
 */
export const PriceFrequencyChartSection: React.FC<PriceFrequencyChartSectionProps> = ({ ...props }) => {
  const [fromDateInput, setFromDateInput] = useState<string>('2024-07-01')
  const [toDateInput, setToDateInput] = useState<string>('2024-07-31')
  const [range, setRange] = useState({ from: fromDateInput, to: toDateInput })
  const handleSetFromDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFromDateInput(e.target.value)
  }
  const handleSetToDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToDateInput(e.target.value)
  }
  const handleFetchData = () => {
    setRange({ from: fromDateInput, to: toDateInput })
  }
  return (
    <Flex w="full" flexDirection="column" overflow="hidden" py={3} gap={GAP} {...props}>
      <Flex gap="4">
        <Input type="date" value={fromDateInput} placeholder="시작 날짜" onChange={handleSetFromDate} />
        <Input type="date" value={toDateInput} placeholder="종료 날짜" onChange={handleSetToDate} />
        <Button colorScheme="blue" variant="outline" onClick={handleFetchData}>
          조회
        </Button>
      </Flex>
      <Suspense
        fallback={
          <Center w="full" h="full">
            <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="gray.500" size="xl" />
          </Center>
        }
      >
        <PriceFrequencyChart h={`calc(100% - ${INPUT_HEIGHT}px)`} range={range} />
      </Suspense>
    </Flex>
  )
}
