import React, { Component } from 'react';

class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            todos : null,
            todosState : null,
            done : false
        }
    }
    getTodos = () => {
        fetch(`https://koreanjson.com/todos?userId=${this.props.match.params.id}`)
        .then(response => response.json())
        .then(todos => this.setState({todos}))
        .catch(error => console.log(error));
    }
    renderAllTodos = () => {
       this.state.todos.map(todo => todo => <div key={todo.id} >{todo.title}</div>);
    }
    isCompleteTodos = () => {
       const completeTodos = this.state.todos.filter(todo => todo.completed === false)
       this.setState({todos: completeTodos})
    //    this.state.todosState.map(todo => todo => <div key={todo.id} >{todo.title}</div>);
       console.log('투두 상태 ', this.state.todos)
    }
    isNotCompleteTodos = () => {
       const notCompleteTodos = this.state.todos.filter(todo => todo.completed === true)
       this.setState({todos: notCompleteTodos})
    //    this.state.todosState.map(todo => todo => <div key={todo.id} >{todo.title}</div>);
       console.log('투두 상태 ', this.state.todos)
    }
    componentDidMount(){
        this.getTodos();
    }
    render() { 
        const { history } = this.props
        const { todos, todosState } = this.state;
        console.log('투두 컴포넌트 :', this.state.todos)
        return ( 
            <div>
                <h2>유저프로필</h2>
                <button onClick={this.renderAllTodos}>모든 목록</button>
                <button onClick={this.isCompleteTodos}>완료된 목록</button>
                <button onClick={this.isNotCompleteTodos}>미완료된 목록</button> 
                {todos? todos.map(todo => <div key={todo.id} >{todo.title}</div>) : null}
                <button onClick={() => history.push('/')}>홈</button>
                <button onClick={() => history.goBack()}>뒤로가기</button>
            </div>
         );
    }
}
 
export default Todos;