import { useState, useEffect } from 'react';
import axios from 'axios';

const useResources = resource => {
  // ** useState for state
  const [resources, setResources] = useState([]);

  // ** useEffect replaces react lifecycle methods
  useEffect(() => {
    fetchResources(resource);
  }, [resource]);

  const fetchResources = async resource => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    );

    setResources(res.data);
  };

  return resources;
};

export default useResources;
