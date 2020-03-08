import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResourceList = ({resource}) => {

  // ** useState for state
  const [resources, setResources] = useState([]);

  // ** useEffect replaces react lifecycle methods
  useEffect( () => {
    fetchResources(resource);
  }, ([resource]))

  const fetchResources = async (resource) => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    );

    setResources(res.data);
  };

  const renderNumberOfResources = number => (
    resources
      .filter((cur, index) => index < number)
      .map(item => <li key={item.id}>{item.title}</li>)
  );

  return (
    <div>
      <ul>{renderNumberOfResources(25)}</ul>
    </div>
  );
}

export default ResourceList;
