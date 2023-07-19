import { useContext } from 'react';
import UserContext from '../context/ContextAPI2';

function C(params) {
  const { state, action } = useContext(UserContext);

  return (
    <div>
      C컴포넌트
      <br />
      {state.id} <br />
      {state.name}
    </div>
  );
}

export default C;
