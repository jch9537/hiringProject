import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//사진 빨리 불러오는 법
class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            image : null,
            todos : null
         }
    }
    getImage = () => {
      fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(json => this.setState({image: json.results[0].picture.large}));
    }
    getTodos = () => {
        fetch(`https://koreanjson.com/todos?userId=${this.props.match.params.id}`)
        .then(response => response.json())
        .then(todos => this.setState({todos}))
        .catch(error => console.log(error));
    }
    componentDidMount(){
        this.getImage();
        this.getTodos();
    }
    
    render() { 
        const { history, match } = this.props;
        const { image, todos } = this.state;
        const user = this.props.users.filter(obj => this.props.match.params.id === obj.id.toString())[0];
        console.log('프로필 프롭 : ', this.props.match.params.id);
        console.log('프로필 스테이트 : ', this.state);
        console.log('투두 프롭스 :', this.state.todos)
        return (            
            <div>
                <h2>유저프로필</h2>
                <div>
                    <img src={image} alt=''/>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                </div>
                <Link to={`${match.url}/Todos`}><div>투두<span>{todos? todos.length : 0}</span></div></Link>
                <button onClick={() => history.push('/')}>홈</button>
                <button onClick={()=> history.goBack()}>뒤로가기</button>
            </div>   
         );
    }
}
 
export default UserProfile;
