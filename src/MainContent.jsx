import React from 'react';
import { useState } from 'react';
import { FaTrashAlt} from 'react-icons/fa';

function MainContent() {
  const [items, setItems] = useState([
    {
    id: 1,
    checked: false,
    item: "One half pound bag of Cocoa Covered Almonds Unsalted"
    },
    {
    id: 2,
    checked: false,
    item: "Item 2"
    },
    {
    id: 3,
    checked: false,
    item: "Item 3"
    },
    ]);

    const handleChecked = (id) => {
      const listItems = items.map((item)=>{
          if (item.id === id){
            item.checked = ! item.checked
          }
          return item
      })
      setItems(listItems);
      localStorage.setItem('shoppingList', JSON.stringify(listItems));
    }

    const handleDelete = (id) => {
      const listItems = items.filter((item) => {
        return item.id !== id
      })

      setItems(listItems)
      localStorage.setItem('shoppingList', JSON.stringify(listItems));
    }

  return (
    <main>

      {items.length ? (
          <ul>
            {items.map((item) => {
              return (
                <li 
                className='item' 
                key={item.id}
                >
                      <input 
                      type="checkbox" 
                      checked={item.checked} 
                      onClick={() =>{handleChecked(item.id)}} 
                      />

                      <label 
                      onDoubleClick={() =>{handleChecked(item.id)}}
                      style={(item.checked) ? {textDecoration: "line-through"} : null}
                      >
                        {item.item}
                      </label>

                      {/* <button>Delete</button>  Replaced the delete button with an icon*/}

                      <FaTrashAlt 
                        onClick={()=>{handleDelete(item.id)}}
                        role="button"
                        tabIndex="0"
                      />
                  
                </li>
              )
            })}
          </ul>
      ) : (
        <p style={{
          backgroundColor: "Red",
          color: "royalblue",
          marginTop: "2rem",
          padding: "15px"
        }} >Your shopping list is empty</p>
      )}

    </main>
  )
}

export default MainContent