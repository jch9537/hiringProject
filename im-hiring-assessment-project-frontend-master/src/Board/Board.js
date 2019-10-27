import React from 'react';

const Board = (props) => {
  console.log('보드 프롭 :', props)
  const { history } = props;
    return (
        <div>
          <h2>게시판 ---공사중---</h2>
          <button onClick={() => history.push('/')}>홈</button>
          <button onClick={() => history.goBack()}>뒤로가기</button>

        </div>
      );
}
 
export default Board;