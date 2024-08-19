import React from 'react'

const NavBar = ( {totalCounters} ) => {
    console.log('NavBar-rendered')
    return (
          <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" >
                {totalCounters}
              </a>
            </div>
          </nav>
        );
};
 
export default NavBar;