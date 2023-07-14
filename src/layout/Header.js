import { Fragment } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import styled from './Header.module.css';

function Header() {
  /* useNavigate hook */
  const nav = useNavigate(); // useNavigate는 함수를 반환
  //console.log(nav);
  const goHome = () => {
    nav('/');
  };
  const goBack = () => {
    nav(-1);
  };
  const goForward = () => {
    nav(1);
  };

  return (
    <Fragment>
      <header className={styled.header}>
        <h3>헤더파일</h3>
        <ul className={styled.ul}>
          <li>목록</li>
          <li>목록</li>
          <li>목록</li>
          <li>목록</li>
        </ul>

        <div>
          <button onClick={goHome}>Go홈</button>
          <button onClick={goBack}>뒤로</button>
          <button onClick={goForward}>앞으로</button>
        </div>
      </header>
      <section>
        <Outlet />
      </section>
    </Fragment>
  );
}
export default Header;
