import React from 'react';

export default function ItemList(props) {

  const items = props.items.map((item, index) => (<li key={index} onClick={() => props.deleteItem(item)}>{item}</li>));
  return(
    <div>
      <ul>
        {items}
      </ul>
    </div>
  )
}