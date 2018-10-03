import React from 'react';
import './ListContainer.css';
import SearchBar from './SearchBar';
import ItemList from './ItemList';
import AddItem from './AddItem';

export default class ListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ['Banana', 'Coconut', 'Pizza'],
      searchTerm: ''
    }
  }
  
  deleteItem(item) {
    this.setState({items: this.state.items.filter( x => x !== item)})
  }

  render() {
    const searchTerm = this.state.searchTerm;
    const searchResults = this.state.items.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()));
    return(
      <div className='container'>
        <h1>List</h1>
        <SearchBar value={searchTerm} onSearchChange={(searchTerm) => this.setState({searchTerm})}/>
        <AddItem itemToAdd={item => this.setState({items: [...this.state.items, item]})}/> 
        <ItemList items={searchResults} deleteItem={item => this.deleteItem(item)}/>
      </div>
    );
  }
}