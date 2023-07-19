import { useContext } from 'react';
import UserContext from '../context/ContextAPI2';

function B(params) {
  //contextAPI의 사용
  const { state, action } = useContext(UserContext);

  return (
    <div>
      B컴포넌트
      <br />
      {state.id} <br />
      {state.name}
    </div>
  );
}

export default B;
