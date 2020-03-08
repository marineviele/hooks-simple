import React, { useState } from 'react';
import ResourceList from './ResourcesList';
import UsersList from './UsersList';

const App = () => {
  const [resource, setResource] = useState('posts');

  return (
    <div>
      <UsersList />
      <button onClick={() => setResource('posts')}>
        Posts
      </button>
      <button onClick={() => setResource('todos')}>
        Todos
      </button>
      <ResourceList resource={resource}/>
    </div>
  );
}

export default App;