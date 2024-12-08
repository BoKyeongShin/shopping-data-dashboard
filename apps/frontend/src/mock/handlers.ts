import { rest } from 'msw'

function generateFrequencyData() {
  return [
    { range: '0 - 20000', count: 0 },
    { range: '20001 - 30000', count: 1 },
    { range: '30001 - 40000', count: 2 },
    { range: '40001 - 50000', count: 2 },
    { range: '50001 - 60000', count: 0 },
    { range: '60001 - 70000', count: 1 },
    { range: '70001 - 80000', count: 0 },
    { range: '80001 - 90000', count: 0 },
    { range: '90001 - 100000', count: 1 },
  ]
}

export const handlers = [
  rest.get('*/api/purchase-frequency', (req, res, ctx) => {
    const from = req.url.searchParams.get('from')
    const to = req.url.searchParams.get('to')

    // 날짜 유효성 검증(BE 코드 참고)
    if (!from || !to || isNaN(Date.parse(from)) || isNaN(Date.parse(to))) {
      return res(ctx.status(400), ctx.json({ error: 'Invalid or missing date parameters' }))
    }

    // 데이터 생성 및 반환(BE 코드 참고)
    const mockData = generateFrequencyData()
    return res(ctx.delay(1000), ctx.json(mockData))
  }),
]
