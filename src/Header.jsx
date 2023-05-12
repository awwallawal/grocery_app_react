import React from 'react'

function Header(props) {
  return (
      <header>
        <nav>
          <h1 >{props.title}</h1>
        </nav>
      </header>
  )
}


Header.defaultProps = {
  title: 'Default Titile'
}

export default Header