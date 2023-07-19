import { createContext } from 'react';
//전역으로 사용할 Context API
const ColorContext = createContext({ color: 'red' }); //초기값 설정
console.log(ColorContext);
export default ColorContext;
