import React from 'react';

function UserItem(props) {
    const {name, email, isGoldClient, salary, image, deleteUser, id} = props;

    return (
        <div > 
        <h2>{`My name is ${name}`}</h2>
        <p>{"Email: " + email}</p>
        { isGoldClient
                ? <h3>Client GOLD</h3>
                : null
        }
        <p>{"Salary: " + salary}</p>
        <img src={image} alt="" />
        <button onClick={() => deleteUser(id)}>Delete user</button>
        </div>
    );
}

export default UserItem;