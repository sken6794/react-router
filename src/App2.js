import { useEffect, useState } from 'react';

function App() {
  //1. 에러를 피하기 위한 방법. = 초기값을 설정
  //const [data, setData] = useState({});

  //2.
  const [data, setData] = useState();
  const handleClick = () => {
    fetch(
      'https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json'
    )
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        setData(data);
      });
  };

  const [raw, setRaw] = useState();
  //화면 로드시 데이터 불러오기
  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json'
    )
      .then((response) => response.json())
      .then((data) => {
        setRaw(data);
      });
  }, []);
  console.log(1);
  return (
    <div>
      <h3>fetch로 데이터 가져오기</h3>
      <p>버튼 클릭 시 데이터가져오기</p>
      <button onClick={handleClick}>데이터로드</button>
      {raw !== undefined ? (
        <p>
          {raw.userId} <br />
          {raw.userPw} <br />
          {raw.userName} <br />
        </p>
      ) : null}
    </div>
  );
}

export default App;
