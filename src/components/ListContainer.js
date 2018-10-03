import React from 'react';
import './ListContainer.css';
import SearchBar from './SearchBar';
import ItemList from './ItemList';

export default class ListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  
  render() {
    return(
      <div className='container'>
        <h1>List</h1>
        <SearchBar />
        <ItemList />
      </div>
    );
  }
}