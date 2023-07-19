import A from './component3/A';
import B from './component3/B';
import UserContext, { UserProvider } from './context/ContextAPI2';

function App() {
  return (
    <UserProvider>
      {/* A가 provider 함수의 children으로 전달된다 */}
      {/* Provider 함수에서 return하는 usercontext를 여기다 뿌린다. */}
      <A />
      <B />
    </UserProvider>
  );
}

export default App;
