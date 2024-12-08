/**
 * 숫자를 한국 원(KRW) 형식으로 변환하는 함수
 * @param amount - 변환할 숫자 값
 * @returns 한화(KRW) 형식으로 변환된 문자열
 */
export const formatToKRW = (amount: number): string => {
  return new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'KRW',
  }).format(amount)
}
