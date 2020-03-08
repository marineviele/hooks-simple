import React, {Component} from 'react';

class App extends Component {
  state =  {resource:'posts'};

  render() {
    return (
      <div>
        <button onClick={() => this.setState({resource: 'posts'})}>Posts</button>
        <button onClick={() => this.setState({resource: 'todos'})}>Todos</button>
        <div>{this.state.resource}</div>
      </div>
    );
  }
};

export default App;