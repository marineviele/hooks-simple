import React, { useState } from 'react';

const App = () => {
  const [resource, setResource] = useState('posts');

  return (
    <div>
      <button onClick={() => setResource('posts')}>Posts</button>
      <button onClick={() => setResource('todos')}>Todos</button>
      <div>{resource}</div>
    </div>
  );
};

export default App;
