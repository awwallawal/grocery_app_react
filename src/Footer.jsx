import React from 'react'

function Footer() {
 const thisYear = new Date().getFullYear();
  return (
    <footer>
      <small>Copyrigth &copy; {thisYear} </small>
    </footer>
  )
}

export default Footer