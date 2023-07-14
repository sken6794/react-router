import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Info from './component/Info';
import User from './component/User';
import Board from './component/Board';
import BoardContent from './component/BoardContent';
import Header from './layout/Header';
import MyPage from './component/MyPage';
// import Board from './component/Board';
// import BoardContent from './component/BoardContent';

function App() {
  return (
    <Routes>
      <Route element={<Header />}>
        <Route path="/" element={<Home />} />
        {/* user는 쿼리스트링 예제 */}
        <Route path="/user" element={<User />} />
        {/* info는 쿼리파라미터 예제 _ 추가 설정이 필요 */}
        {/* :a => 값이 넘어가는데 바뀔 수 있는 값이라는 의미 */}
        <Route path="/info/:a/:b" element={<Info />} />
      </Route>
      {/* board, boardContent 분기 */}
      {/* <Route path="/board" element={<Board />} />
      <Route path="/board/:num" element={<BoardContent />} /> */}

      {/* board의 자식 boardContent 중첩 라우터 */}
      {/* Outlet 컴포넌트 추가 */}
      <Route path="/board" element={<Board />}>
        <Route path=":num" element={<BoardContent />} />
      </Route>

      <Route path="mypage" element={<MyPage />} />
    </Routes>
  );
}

export default App;
