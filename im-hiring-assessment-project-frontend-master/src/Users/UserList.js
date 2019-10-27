import React from 'react';
import { Link } from 'react-router-dom';

//map돌리고 이미지는 따로 넣어주는 방법없나?
const UserList = (props) => {
    console.log('유저리스트 프롭스 : ', props)
    const { users, match, history } = props;
    return ( 
        <div>
            <div>유저프로필</div>
            <div>
                {users.map(({id, name}) => <Link to={`${match.url}/${id}`} key={id}><div>{name}</div></Link>)}
            </div>
            <button onClick={() => history.push('/')}>홈</button>
            <button onClick={() => history.goBack()}>뒤로가기</button>
        </div>
     );
}
 
export default UserList;

