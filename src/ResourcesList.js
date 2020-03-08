import React from 'react';
import useResources from './useResources';


const ResourceList = ({resource}) => {
  const resources = useResources(resource);

  const renderNumberOfResources = number => (
    resources
      .filter((cur, index) => index < number)
      .map(item => <li key={item.id}>{item.title}</li>)
  );

  return <ul>{renderNumberOfResources(15)}</ul>;
}

export default ResourceList;
