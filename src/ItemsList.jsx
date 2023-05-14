import React from 'react'
import LineItem from './LineItem';

function ItemsList({items, handleChecked, handleDelete}) {
  return (
    <div>
      <ul>
            {items.map((item) => {
              return (
                <LineItem
                  item={item}
                  key={item.id} 
                  items={items}
                  handleChecked={handleChecked}
                  handleDelete={handleDelete}
                />
              )
            })}
      </ul>
    </div>
  )
}

export default ItemsList
