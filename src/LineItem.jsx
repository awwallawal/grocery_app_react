import React from 'react'
import { FaTrashAlt} from 'react-icons/fa';


function LineItem({item, handleChecked, handleDelete}) {
  return (
    <div>
         <li 
            className='item' 
            key={item.id}
            >
                  <input 
                  type="checkbox" 
                  defaultChecked={item.checked} 
                  onChange={() =>{handleChecked(item.id)}} 
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
                    aria-label= {`Delete ${item.item}`}
                  />
              
            </li>
    </div>
  )
}

export default LineItem
