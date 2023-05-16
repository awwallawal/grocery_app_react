import Header from './Header'
import AddItem from './AddItem';
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

    const [newItem, setNewItem] = useState("");
    // Making the code DRYer but not neccessary 
    function setAndSaveItems (newItems) {
      setItems(newItems);
      localStorage.setItem('shoppingList', JSON.stringify(newItems));
    }

    const addItem = (item) => {
      // the addItem would come with three parameters as above, i.e: id, checked, item/newItem
      const id = (items.length) ? items[items.length -1].id + 1 : 1;
      const myNewItem = { id, checked: false, item};
      const listItems = [...items, myNewItem];
      setItems(listItems);
      localStorage.setItem('shoppingList', JSON.stringify(listItems));
      // setAndSaveItems(listItems);
    }

    const handleChecked = (id) => {
      const listItems = items.map((item)=>{
          if (item.id === id){
            item.checked = ! item.checked
          }
          return item
      })
      setItems(listItems);
      localStorage.setItem('shoppingList', JSON.stringify(listItems));
      // setAndSaveItems(listItems);

    }

    const handleDelete = (id) => {
      const listItems = items.filter((item) => {
        return item.id !== id
      })

      setItems(listItems)
      localStorage.setItem('shoppingList', JSON.stringify(listItems));
      // setAndSaveItems(listItems);
    }

    const thisYear = new Date().getFullYear();
    const myName = "Awwal";

    const handleSubmit = (e) => {
      e.preventDefault();
      // Once you submit the form you need to revert the value of the newItem back to its original state of empty string
      if (!newItem) return
      // (!newItem) ? " " :
      addItem(newItem);
      // The above line pushes the newItem into the item array unlike using the items.push() method 
      setNewItem("")
    }
  
  return (
    <div className='App'>
      <Header  title="Grocery List"/>
      <AddItem
        newItem = {newItem}
        setNewItem = {setNewItem}
        handleSubmit = {handleSubmit}
      />
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
