import React from 'react'
import { FaTrashAlt} from 'react-icons/fa';


function ItemsList({items, handleChecked, handleDelete}) {
  return (
    <div>
      <ul>
            {items.map((item) => {
              return (
                <li 
                className='item' 
                key={item.id}
                >
                      <input 
                      type="checkbox" 
                      defaultChecked={item.checked} 
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
    </div>
  )
}

export default ItemsList
