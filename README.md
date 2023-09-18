# CSS-SORT

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Use Library

- Styled-Component
- react-dom
- react-router-dom

## How to Start

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Core Concerns

### Flex

- Flex를 이용하여 컨텐츠 추가에 따른 정렬 로직 조정
- 테스트 방법: input 창에 숫자를 입력하고 버튼을 클릭하여 레이아웃을 확인
- width 크기에 따라 보여지는 1줄에 보여지는 컨텐츠의 숫자 조정
- 입력한 숫자가 3 이하일 경우, 컨텐츠의 width가 33.3333%로 조정
- 입력한 숫자가 4 이상일 경우, 컨텐츠의 width를 조정
- 입력한 숫자가 4 이상이고 브라우저 width보다 컨텐츠의 합산 크기가 클 경우, 컨텐츠를 아래로 내림
