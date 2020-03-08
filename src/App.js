import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  state = {
    resource: 'posts',
    resources: []
  };

  componentDidMount() {
    this.fetchResources();
  }

  componentDidUpdate(prevProps, prevState) {
    // ** fetch only if resource changed
    if (prevState.resource !== this.state.resource) {
      this.fetchResources();
    }
  }

  fetchResources = async () => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/${this.state.resource}`
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
        <button onClick={() => this.setState({ resource: 'posts' })}>
          Posts
        </button>
        <button onClick={() => this.setState({ resource: 'todos' })}>
          Todos
        </button>
        <ul>{this.renderNumberOfResources(25)}</ul>
      </div>
    );
  }
}

export default App;