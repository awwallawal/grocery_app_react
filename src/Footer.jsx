import React from 'react'

function Footer() {
  const thisYear = new Date().getFullYear();
  const myName = "Awwal";
  
  return (
    <footer>
      <small> Copyrigth {myName} Development  &copy; {thisYear} </small>
    </footer>
  )
}

export default Footer