import { BoxProps, Flex } from '@chakra-ui/react'
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from 'chart.js'
import React, { useMemo } from 'react'
import { Bar } from 'react-chartjs-2'
import { useFetchPurchaseFrequencyQuery } from '../../hooks/useFetchPurchaseFrequencyQuery'

// Chart.js 기본 설정
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const CHART_OPTIONS = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: '가격대별 구매 빈도',
    },
  },
}
const BACKGROUND_COLOR = '#a6d2f7'
const BORDER_COLOR = '#34a2ea'

interface PriceFrequencyChartProps extends BoxProps {
  range: { from: string; to: string }
}

export const PriceFrequencyChart: React.FC<PriceFrequencyChartProps> = ({ range, ...props }) => {
  const { data: purchaseFrequency = [] } = useFetchPurchaseFrequencyQuery(
    { from: range.from, to: range.to },
    { suspense: true },
  )

  const priceRangesLabels = useMemo(
    () =>
      purchaseFrequency.map((entry) => {
        const [min, max] = entry.range.split(' - ').map(Number)
        return `${Math.floor(min / 10000)}만원 ~ ${Math.floor(max / 10000)}만원`
      }),
    [purchaseFrequency],
  )
  const purchaseCounts = useMemo(() => purchaseFrequency.map((entry) => entry.count), [purchaseFrequency])

  const chartData = {
    labels: priceRangesLabels,
    datasets: [
      {
        label: '구매 빈도',
        data: purchaseCounts,
        backgroundColor: BACKGROUND_COLOR,
        borderColor: BORDER_COLOR,
        borderWidth: 1,
        borderRadius: 5,
      },
    ],
  }

  return (
    <Flex w="full" h="full" py={3} justifyContent="center" {...props}>
      <Bar data={chartData} options={CHART_OPTIONS} />
    </Flex>
  )
}
