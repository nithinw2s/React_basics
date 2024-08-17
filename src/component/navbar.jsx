import React, { Component } from 'react'

const NavBar = ( {totalCounters} ) => {
    // console.log(totalCounters)
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