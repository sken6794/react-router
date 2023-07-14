import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h3>메인페이지</h3>

      <ul>
        <li>
          <Link to="/user?id=aaa123&name=홍길동">유저</Link>
        </li>
        <li>
          {/* a 태그는 Link로 대체 */}
          <Link to="/info/1/홍길동">인포</Link>
        </li>
        <li>
          <Link to="/info/2/이순신">인포</Link>
        </li>
        <li>
          <Link to="/info/3/홍길자">인포</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
