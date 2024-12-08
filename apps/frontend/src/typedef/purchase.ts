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
  productId: number
  customerId: number
  quantity: number
  date: string
}

export type FetchPurchaseFrequencyApiResponse = PurchaseFrequency[]
