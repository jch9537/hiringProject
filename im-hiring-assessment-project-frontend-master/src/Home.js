import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return ( 
        <div>
            <Link to='/'>
                <h1>어플리케이션을 선택해주세요</h1>
            </Link>
            <Link to="/Users">
                <button>투두</button>
            </Link>
            <Link to="/Board">
                <button>게시판</button>
            </Link>
        </div>
     );
}
 
export default Home;