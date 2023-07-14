import { useLocation, useSearchParams } from 'react-router-dom';

function User() {
  //쿼리스트링 값을 받는 방법
  //1. useLocation (search 값에 ? 뒷부분 다 받아오는데 분류가 까다롭다.)
  const location = useLocation();
  // console.log(location);
  // console.log(location.search);

  //2. useSerachParams - 첫 번째 인덱스에는 set,get을 가진 객체,
  //                     두 번째 인덱스에는 쿼리스트링을 직접 변경할 수 있는 함수
  const [obj, setObj] = useSearchParams();
  //obj.get('key') // request.getParameter('name')
  let id = obj.get('id');
  let name = obj.get('name');
  // console.log(id);
  // console.log(name);

  const handleClick = () => {
    //setObj 로 받은 함수는 쿼리스트링으로 받은 obj안의 값들을 수정할 수 있다.
    // 넣는 값은 객체 형태로 key : value 형태로 전달
    setObj({ id: '변경', name: 'name변경' });
  };

  return (
    <div>
      <h3>유저페이지</h3>
      쿼리 스트링 id : {id} <br />
      쿼리 스트링 name : {name} <br />
      <button onClick={handleClick}>쿼리스트링 제어하기</button>
    </div>
  );
}

export default User;
