import React from 'react';
import { useState } from 'react';
import { FaTrashAlt} from 'react-icons/fa';

function MainContent({items, handleChecked, handleDelete}) {
  
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