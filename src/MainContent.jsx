import React from 'react'

function MainContent() {
  const handleNameChange = () => {

    const nameArray = ['Awwal', 'Akolade', 'Adebayo'];
    const randomNumber = Math.floor(Math.random()*nameArray.length);
    return nameArray[randomNumber];
    // Created a function to randomly change the name displayed on the page on refresh using the randomNumber const to change the name picked from the names array.
  }

  return (
    <main>
      <section>
        <p>Hi <span> {handleNameChange()} </span> </p>
      </section>
    </main>
  )
}

export default MainContent