import { useContext, useRef } from 'react';
import UserContext, { UserConsumer } from '../context/ContextAPI2';
import C from './C';

function A(params) {
  //userContext 훅 - 이용하여 값을 조회 or 제어
  //provider의 value값을 사용할 수 있다.
  // userContext(UserContext)가 가지고 있는 값을 구조분해 할당 받기.
  const { state, action } = useContext(UserContext); //ContextAPI2.js 에서 export한거 받아옴
  //console.log(result);

  //ref 훅
  const inputRef1 = useRef();
  const inputRef2 = useRef();

  const handleClick = () => {
    //console.log(action.setUser);
    //provider 값을 외부에서 변경
    action.setUser({
      id: inputRef1.current.value,
      name: inputRef2.current.value,
    });
    inputRef1.current.value = '';
    inputRef2.current.value = '';
  };

  return (
    <div>
      {/* <UserContext.Consumer></UserContext.Consumer> */}
      {/* <UserConsumer> */}
      {/* value는 상위에서 전달되는 밸류 */}
      {/* value는 createContext의 초기값을 받음 */}
      {/* id , name이 aaa,홍길동이 찍히는 이유는 초기값을 주긴 했어도 
        provider태그로 감싼 부분이 provider함수를 호출하여 변경하는 과정이 일어났기 때문 */}
      {/* {(value) => (
          <div>
            {value.state.id} <br />
            {value.state.name}
          </div>
        )} */}
      {/* </UserConsumer> */}

      <input type="text" ref={inputRef1} />
      <input type="text" ref={inputRef2} />
      <button onClick={handleClick}>provider값 변경</button>
      <div>
        {state.id} <br />
        {state.name}
      </div>
      <C />
    </div>
  );
}

export default A;
