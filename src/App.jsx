import Header from './Header'
import MainContent from './MainContent'
import Footer from './Footer'
import './App.css';
import { useState } from 'react';

function App() {

  // We brought these useState from the MainContent component because we want to be able to access both in the MainContent Component and Footer Components 

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

    const thisYear = new Date().getFullYear();
    const myName = "Awwal";
  
  return (
    <div className='App'>
      <Header  title="Grocery List"/>
      <MainContent 
        items = {items}
        handleChecked = {handleChecked}
        handleDelete = {handleDelete}
      />
      <Footer 
        year = {thisYear}
        developer = {myName}
        length = {items.length} 
      />
    </div>
  )
}

export default App
