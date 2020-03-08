import React, { Component } from 'react';
import ResourceList from './ResourcesList';

class App extends Component {
  state = {
    resource: 'posts',
  };

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ resource: 'posts' })}>
          Posts
        </button>
        <button onClick={() => this.setState({ resource: 'todos' })}>
          Todos
        </button>
        <ResourceList resource={this.state.resource}/>
      </div>
    );
  }
}

export default App;