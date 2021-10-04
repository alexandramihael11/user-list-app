import React from 'react';
import PostItem from './PostItem';

class PostList extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
          posts:[],
          isPosts:this.props.isPosts
        }
    }

componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log(data);
      data = data.filter(post => post.id < 5);
      console.log(data);
      this.setState({posts: data});
    })
}
    render() {
        return (
        <div>
            {
                this.props.isPosts
                ? this.state.posts.map((post,index) => {
                    return ( <PostItem
                    title={post.title}
                    key={index}
                    /> 
                  ); 
                })
                : null
            }
          
        </div>
        )
    }
}


export default PostList;
        



    