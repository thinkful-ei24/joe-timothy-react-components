import React from 'react';

export default function ItemList(props) {

  const items = props.items.map(item => (<li>{item}</li>));
  return(
    <div>
      <ul>
        {items}
      </ul>
    </div>
  )
}