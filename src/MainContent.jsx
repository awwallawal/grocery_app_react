import React from 'react'
import { useState } from 'react';

function MainContent() {
  const [name, setName] = useState("Akanni");
  // The name is the getter while the setName is the setter similar to the Object Oriented Programmming of Vanilla JavaScript. What resides in the bracket is the default state/parameter

  const [count, setCount] = useState(0)

  const handleSetName = () =>{
    const namesArray = ['Fatimah', 'Olaitan', 'Anike', 'Yusuf'];
    const randomNumber = Math.floor(Math.random()*namesArray.length)

    setName(namesArray[randomNumber]);
  };
  
  const handleSetCount = () => {
    setCount(count + 1);
  }

  const handleNameChange = () => {

    const nameArray = ['Awwal', 'Akolade', 'Adebayo'];
    const randomNumber = Math.floor(Math.random()*nameArray.length);
    return nameArray[randomNumber];
    // Created a function to randomly change the name displayed on the page on refresh using the randomNumber const to change the name picked from the names array.
  }

  const handleClick = () => {
   alert(`You just clicked on a button ${handleNameChange()}!`)
  }
  
  
  
  const handleClickTwo = (message = "'Input a name into the function'") => {
   alert(`${message} continue your training!`);
   // Using the concept of default parameter to make sure a name is added to the function 
  }
  
  const handleClickThree = (e) => {
   alert(e.target)
  }

  const handleDoubleClick = () => {
   alert ("You clicked this area using double click")
  }


  return (
    <main>
      <section>
        <p onDoubleClick={handleDoubleClick}>Hi <span> {handleNameChange()} </span> </p>

      </section>
      <button onClick={handleClick}>Click Me!</button>
      <button onClick={() => {handleClickTwo()}}>Click Me Two!</button>
      {/* As you can see in the first button we didnt add the callback method i.e () to the function name. If we do so the block of code becomes immediately invoked once the page loads before the button is clicked. However, the second way is the right way of doing it by wrapping the function within another Arrow function which then executes when the button is clicked */}

      <button onClick={(e) => {handleClickThree(e)}}>Click Me Three!</button>

     <p style={{marginTop: "20px"}}>Create A Name Change Button</p>

     <p>My name is {name}</p>
     {/* The above is possible because we have created a useState and made the default value/parameter Akanni. However, in order to change the name Akanni via button change we need a couple of gotcha approaches */}
     <button style={{padding: "6px 12px", fontWeight: "bold", marginTop: "10px" }} onClick={handleSetName}>Change name</button>
    
    <h1>Change count value</h1>
    <p>Initial count is: {count} </p>
    <button onClick={()=>{handleSetCount()}} >Add 1 to count</button>
    
    </main>
  )
}

export default MainContent