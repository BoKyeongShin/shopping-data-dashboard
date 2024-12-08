import { Box } from '@chakra-ui/react'
import { CustomerTableSection } from './components/CustomerTable/CustomerTableSection'
import { PriceFrequencyChartSection } from './components/PriceFrequencyChart/PriceFrequencyChartSection'

function App() {
  return (
    <Box>
      {/* 전체 Suspense 감싸기 */}
      <PriceFrequencyChartSection />
      <CustomerTableSection />
    </Box>
  )
}

export default App
