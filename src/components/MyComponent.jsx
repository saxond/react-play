import React from 'react';
import axios from 'axios';

class ItemRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.item.userId}</td>
        <td>{this.props.item.id}</td>
        <td>{this.props.item.title}</td>
        <td>{this.props.item.completed}</td>
      </tr>
    );
  }
}

export default class MyComponent extends React.Component {

  state = {
    error: null,
    isLoaded: false,
    items: []
  }

  componentDidMount() {
    //const id = 1
    //`https://jsonplaceholder.typicode.com/todos/${id}`
    axios.get(`https://jsonplaceholder.typicode.com/todos`, {
      params: {
        //ID: 12345
      }
    })
    .then((response) => this.setState({items: response.data}))
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>ID</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          { this.state.items.map((item) => <ItemRow item={item}/>) }
        </tbody>
      </table>
    );
  }
}
