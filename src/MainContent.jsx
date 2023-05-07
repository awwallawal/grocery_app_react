import React from 'react'

function MainContent() {
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

  return (
    <main>
      <section>
        <p>Hi <span> {handleNameChange()} </span> </p>
      </section>
      <button onClick={handleClick}>Click Me!</button>
      <button onClick={() => {handleClickTwo()}}>Click Me Two!</button>
      {/* As you can see in the first button we didnt add the callback method i.e () to the function name. If we do so the block of code becomes immediately invoked once the page loads before the button is clicked. However, the second way is the right way of doing it by wrapping the function within another Arrow function which then executes when the button is clicked */}
    </main>
  )
}

export default MainContent