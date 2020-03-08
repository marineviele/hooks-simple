import React, { Component } from 'react';
import axios from 'axios';

class ResourceList extends Component {
  state = {
    resources: []
  };

  componentDidMount() {
    this.fetchResources();
  }

  componentDidUpdate(prevProps) {
    // ** fetch only if resource changed
    if (prevProps.resource !== this.props.resource) {
      this.fetchResources();
    }
  }

  fetchResources = async () => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/${this.props.resource}`
    );

    this.setState({ resources: res.data });
  };

  renderNumberOfResources = number => (
    this.state.resources
      .filter((cur, index) => index < number)
      .map(item => <li key={item.id}>{item.title}</li>)
  );

  render() {
    return (
      <div>
        <ul>{this.renderNumberOfResources(25)}</ul>
      </div>
    );
  }
}

export default ResourceList;
