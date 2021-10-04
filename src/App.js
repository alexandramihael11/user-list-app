import React from 'react';
import UserList from './components/UserList';
import UserAddForm from './components/UserAddForm';
import './App.css';
import PostList from './components/PostList';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      background: 'yellow',
      color: 'green',
      users: [],
      posts: [],
      isUsers:true,
      isPosts:false,
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        data = data.filter(user => user.id < 4);
        data.forEach(user => {
          user.isGoldClient = true
          user.salary=2000;
          user.image='https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60';
        });
        this.setState({users: data});
    })
  }

  changeColor(event) {
    this.setState({background: event.target.value});
  }
  changeTextColor(event) {
    this.setState({color: event.target.value});
  }

  updateUsers() {
    this.setState({isPosts: false, isUsers: true});
  }

  updatePosts() {
    this.setState({isPosts: true, isUsers: false});
  }

  getMaxId(users) {
    let maxId = 0;

    users.forEach(user => {
      if (user.id > maxId) {
        maxId = user.id;
      }
    });

    return maxId;
  }

  deleteUser(userId){
    this.setState(prevState => {
      return{
      users : prevState.users.filter(users =>users.id !== userId)
      }
    });
  }

  submitAddForm(event, name, email, isGoldClient, salary, image) {
    event.preventDefault();
    this.setState(prevState => {
      return {
        users: [
          ...prevState.users,
          {
            id: this.getMaxId(prevState.users) + 1,
            name,
            email,
            isGoldClient,
            salary,
            image
          }
        ]
      }
    });
  }

  render() {
    return(
      <div className="app" style={{background: this.state.background , color: this.state.color}}>
        <h1>Admin panel </h1> 

        <UserAddForm submitAddForm={(event, name, email, isGoldClient, salary, image) => this.submitAddForm(event, name, email, isGoldClient, salary, image)}/>
        <UserList isUsers={this.state.isUsers} deleteUser={(userId) => this.deleteUser(userId)} users={this.state.users}/>
        <label htmlFor="background">Schimba culoarea fundalului</label>
        <input type="color" onChange={(event) => this.changeColor(event)}/>
        <label htmlFor="color">Schimba culoarea textului</label>
        <input type="color" onChange={(event) => this.changeTextColor(event)}/>
        <PostList isPosts={this.state.isPosts} posts={this.state.posts}/>
        <button onClick={ () => this.updateUsers()}>Afiseaza useri</button>
        <button onClick={ () => this.updatePosts()}>Afiseaza postari</button>
      </div>
         
    );
  }
}

export default App;
