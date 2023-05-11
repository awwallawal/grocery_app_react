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

    const handleChecked = (id) => {
      // alert('Awwal')
      // alert(`You have cliked Item ${id}`)
      // We want this handler to do is change the checked boolean from true to false (remember the dice game)
      // There are ways to achieve this either through the declarative React way or imperative JavaScript way

      /*Imperative Vanilla JavaScript Way
      const copyItemList = [...items];
      for (let objects of copyItemList){
        if(objects.id === id){
          objects.checked = !objects.checked
        }
      }
      setItems(copyItemList);
      */
      // React Declarative Way
      const ListItems = items.map((item)=>{
          if (item.id === id){
            item.checked = ! item.checked
          }
          return item
      })
      setItems(ListItems);
    }

  return (
    <main>
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

                  <label htmlFor="">
                    {item.item}
                  </label>

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