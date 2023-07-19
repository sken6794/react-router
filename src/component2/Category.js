import { NavLink } from 'react-router-dom';

function Category(params) {
  const list = [
    { name: 'all', topic: '전체' },
    { name: 'business', topic: '비지니스' },
    { name: 'entertainment', topic: '연예' },
    { name: 'general', topic: '일반' },
    { name: 'health', topic: '건강' },
    { name: 'sports', topic: '스포츠' },
    { name: 'technology', topic: '기술' },
  ];

  const mystyle = { backgroundColor: 'yellow', color: 'red' };

  return (
    <div>
      <ul>
        {/* <li><Link to =''>전체</Link></li> */}
        {list.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.name === 'all' ? '/' : `/${item.name}`}
              /* style={({ isActive }) => (isActive ? mystyle : undefined)} */
              style={({ isActive }) => isActive && mystyle}
            >
              {item.topic}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Category;
