import { useParams } from 'react-router-dom';

function BoardContent() {
  const { num } = useParams();

  return (
    <div>
      <h4>상세페이지</h4>
      {num}입니다
    </div>
  );
}

export default BoardContent;
