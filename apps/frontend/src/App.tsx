import { Flex } from '@chakra-ui/react'
import { CustomerTableSection } from './components/CustomerTable/CustomerTableSection'
import { PriceFrequencyChartSection } from './components/PriceFrequencyChart/PriceFrequencyChartSection'

function App() {
  return (
    <Flex flexDirection="column" w="full" h="100vh" px={3}>
      <PriceFrequencyChartSection flex={1} />
      <CustomerTableSection flex={1} />
    </Flex>
  )
}

export default App
