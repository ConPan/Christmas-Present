import React from 'react';

const NavBar = () => {
  const NavBarStyle = {
    marginLeft: '50px', 
    marginRight: '50px', 
    marginTop: '20px', 
    backgroundColor: 'black', 
    color: 'white', 
    fontSize: '20px',
    textAlign: 'center',
    height: '25px',
  };

  return (
    <nav style={NavBarStyle}>
      <ul>
      Nav bar
      </ul>
    </nav>
  );
}

export default NavBar;