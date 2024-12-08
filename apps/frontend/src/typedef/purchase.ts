export interface Purchase {
  date: string
  imgSrc: string
  price: number
  product: string
  quantity: number
}
export interface FetchPurchaseFrequencyApiParam {
  from: string
  to: string
}
export interface PurchaseFrequency {
  range: string
  count: number
}

export type FetchPurchaseFrequencyApiResponse = PurchaseFrequency[]
