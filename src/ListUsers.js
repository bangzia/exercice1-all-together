import React from 'react';
import User from './User';

const ListUsers = props => {
  return (
    <div>
      <p>List of users</p>
      <ol>{props.users.map((user,index)=><User key={index} user={user}/>)}<ol/>
    </div>
  );
};

export default ListUsers;
