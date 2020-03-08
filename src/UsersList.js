import React from 'react';
import useResources from './useResources';


const UsersList = () => {
  const resources = useResources('users');

  const renderUsers = () => (
    resources
      .map(user => <li key={user.id}>{user.name}</li>)
  );

  return <ul>{renderUsers()}</ul>;
}

export default UsersList;
