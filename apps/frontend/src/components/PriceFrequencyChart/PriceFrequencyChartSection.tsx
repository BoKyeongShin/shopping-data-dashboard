import { Flex, FlexProps } from '@chakra-ui/react'
interface PriceFrequencyChartSectionProps extends FlexProps {}
export const PriceFrequencyChartSection: React.FC<PriceFrequencyChartSectionProps> = ({ ...props }) => {
  return <Flex {...props}>bar chart</Flex>
}
