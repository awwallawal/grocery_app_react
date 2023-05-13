import React from 'react';
import { useState } from 'react';
import ItemsList from './ItemsList';

function MainContent({items, handleChecked, handleDelete}) {
  
  return (
    <main>

      {items.length ? (
         <ItemsList
          items={items}
          handleChecked={handleChecked}
          handleDelete={handleDelete}
         /> 
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