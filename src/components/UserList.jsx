import React from 'react';
import UserItem from './UserItem';

class UserList extends React.Component {
    constructor(props){
      super(props);
      this.state= {
        isUsers:this.props.isUsers,
       };
    }

    render() {
        const {users,deleteUser} = this.props;
      return (
        <div>
            {  this.props.isUsers 
                ? users.map((user, index) => {
                return ( <UserItem
                    id={ user.id }
                    name={ user.name }
                    email={ user.email }
                    isGoldClient={ user.isGoldClient }
                    salary={ user.salary }
                    image={ user.image }
                    deleteUser = {deleteUser}
                    key={ index }
                   />
                ); 
              })
                : null
            }
                
        </div>
      );
    }
}

export default UserList;