import { AbsoluteCenter, Box, Spinner } from '@chakra-ui/react'
import { Suspense } from 'react'
import { CustomerTableSection } from './components/CustomerTable/CustomerTableSection'
import { PriceFrequencyChartSection } from './components/PriceFrequencyChart/PriceFrequencyChartSection'

function App() {
  return (
    <Box w="full" h="100vh">
      <Suspense
        fallback={
          <AbsoluteCenter>
            <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="gray.500" size="xl" />
          </AbsoluteCenter>
        }
      >
        <PriceFrequencyChartSection />
        <CustomerTableSection />
      </Suspense>
    </Box>
  )
}

export default App
