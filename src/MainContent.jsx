import React from 'react';
import { useState } from 'react';
import { FaTrashAlt} from 'react-icons/fa';

function MainContent() {
  const [items, setItems] = useState([
    {
    id: 1,
    checked: true,
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

  return (
    <main>
      <ul>
        {items.map((item) => {
          return (
            <li className='item' key={item.id}>
              <input type="checkbox" checked={item.checked} />
              <label htmlFor="">{item.item}</label>
              {/* <button>Delete</button>  Replaced the delete button with an icon*/}
              <FaTrashAlt 
                role="button"
                tabIndex="0"
              />
            </li>
          )
        })}
      </ul>
    </main>
  )
}

export default MainContent