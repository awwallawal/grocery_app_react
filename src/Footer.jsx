import React from 'react'

function Footer({year, developer, length}) {
  
  
  return (
    <footer>
      <code>You have {length} list {(length > 1) ? "items" : ((length === 1) ? "item" : " ") } </code>
      <small> Copyrigth {developer} Development  &copy; {year} </small>
    </footer>
  )
}

Footer.defaultProps ={
  year: "20xx",
  developer: "Developer Name",
  length: "List of Items"
}

export default Footer