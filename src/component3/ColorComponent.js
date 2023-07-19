import ColorContext from '../context/ContextAPI';

function ColorComponent(params) {
  return (
    <ColorContext.Consumer>
      {/* Consumer에서는 컨텍스트API의 사용, 값을 전달받은 함수를 하나 선언하고, 첫번째 매개변수로 받는다. */}
      {/* Consumer 안에다가 함수를 하나 적고 첫번째 매개변수가 ContextAPI가 가지고있는
    초기값을 전달받을 수 있다. 넘어온 value가 객체이고 객체안에 color라는 key를 넣어놨엇음 */}
      {(value) => <div>컬러컴포넌트 value : {value.color}</div>}
    </ColorContext.Consumer>
  );
}
export default ColorComponent;
