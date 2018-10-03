import React from 'react';

export default class AddItem extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      itemName: ''
    }
  }

  render() {
    return(
      <form onSubmit={(event) => {
        event.preventDefault();
        this.props.itemToAdd(this.state.itemName);
        this.setState({itemName: ''});
        }
      }>
        <input value={this.state.itemName} onChange={event => this.setState({itemName: event.target.value})} type='text' placeholder='Add item to list'></input>
        <button type='submit'>Add Item</button>
      </form>
    )
  }
}