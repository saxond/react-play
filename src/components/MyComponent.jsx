import React from 'react';
import axios from 'axios';

class ItemRow extends React.Component {
  render() {
    return (
      <tr className={this.props.index % 2 !== 0 ? 'pure-table-odd' : ''}>
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
  }

  render() {
    return (
      <table className='pure-table pure-table-horizontal'>
        <thead>
          <tr>
            <th>User ID</th>
            <th>ID</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          { this.state.items.map((item, index) => <ItemRow item={item} index={index} key={index}/>) }
        </tbody>
      </table>
    );
  }
}
