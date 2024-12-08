# 물품 구매 내역을 시각화하는 프로젝트

## 프로젝트 소개

이 프로젝트는 특정 기간 동안 발생한 구매 데이터를 바탕으로 가격대별 구매 빈도를 차트로 시각화하는 웹 애플리케이션입니다.

## 기술 스택

- **React**: UI 구성
- **Chakra UI**: UI 스타일링
- **React Query**: 데이터 페칭 및 상태 관리
- **Chart.js**: 데이터 시각화
- **MSW**: API mocking

## 구현 시 겪었던 문제점

1. API 호출 시 500 에러 발생

- `/api/purchase-frequency` 호출 시 500 에러가 발생했습니다. 이를 해결하기 위해 MSW(Mock Service Worker)를 도입하여 API를 모킹하고 테스트 환경에서 안정적으로 데이터를 처리하도록 구현했습니다.

2. SearchInput과 CustomerTableWrapper 간의 데이터 갱신 문제

- SearchInput에서 빈 값으로 검색 시 API가 404 에러를 반환하여 CustomerTableWrapper가 렌더링되지 않는 문제가 발생했습니다. 이로 인해 사용자가 입력값을 제거해도 데이터가 갱신되지 않는 상황이 발생했습니다.
- 빈 값일 때 기본 데이터를 보여주는 로직을 추가해보기도 하고, 에러 상태를 별도로 관리해보기도 했지만 CustomerTableWrapper가 렌더링 되지 않아 여전히 filterName가 업데이트 되지 않았습니다.
  이를 어떻게 고치면 좋을지 고민했는데, 결국 수정하지 못했습니다.
