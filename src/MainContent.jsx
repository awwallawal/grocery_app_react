import React from 'react'

function MainContent() {
 
 const handleNameChange = () => {
  const namesArray = ['Awwal', 'Akolade', 'Akanni', 'Adebayo', ];
  const randomNumber = Math.floor(Math.random()*namesArray.length);
  return namesArray[randomNumber];
 }

  return (
    <main>
       <section>
         <p> Hello { handleNameChange() } </p>
         {/* Remember to use the ()/callback function on a function you have called */}
       </section>
    </main>
  )
}

export default MainContent