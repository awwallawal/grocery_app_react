import React from 'react'

function Footer() {
  const thisYear = new Date().getFullYear();
  const myName = "Awwal";
  // const footerStyle = {
  //  backgroundColor: "royalblue",
  //  color: "whitesmoke",
  // }

  return (
    <footer>
      <small> Copyrigth {myName} Development  &copy; {thisYear} </small>


      {/* <small style={footerStyle}> Copyrigth {myName} Development  &copy; {thisYear} </small> */}
    </footer>
  )
}

export default Footer