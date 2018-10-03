import React from 'react';

export default function SearchBar(props) {
  return(
    <div>
      <input value={props.value} onChange={event=> props.onSearchChange(event.target.value)} type='text' placeholder='Search Items' ></input>
    </div>
  )
}