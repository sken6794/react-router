import { createContext, useState } from 'react';

//1
const UserContext = createContext({
  state: { id: '초기값id', name: '초기값name' },
  action: {
    setUser: () => {},
  },
});

//2. Provider 함수 선언
// 해당 함수의 매개변수는 반드시 {children} 으로 선언

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: 'aaa',
    name: '홍길동',
  });

  const value = {
    state: user,
    action: { setUser },
  };
  //console.log(value);
  //console.log(children);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

//3. Consumer함수 반환
const UserConsumer = UserContext.Consumer;
//provider, consumer 만들어 놓은걸 export
// consumer는 Context가 가지고 있는 Consumer를 반환받아서 export
export { UserProvider, UserConsumer };

export default UserContext;
