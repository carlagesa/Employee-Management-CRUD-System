import React from 'react'
import { Link } from 'react-router-dom';

function Example(){
return(
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid"> 
      <Link to="/" class="navbar-brand" aria-current="page">Employee Management System</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
         
          <ul class="navbar-nav">
        
            <li class="nav-item">
              {/* <a class="nav-link active" aria-current="page" href="#"
               data-bs-toggle="tooltip" data-bs-placement="bottom" title="Check Employees"
              >Home</a> */}
              <Link to="/" class="nav-link active" aria-current="page"> Home</Link>

            </li>
            <li class="nav-item">
            <Link to="/app" class="nav-link active" aria-current="page">Employees</Link>

            </li>

            <li class="nav-item">
            <Link to="/teamleads" class="nav-link active" aria-current="page"> Team Leads</Link>

            </li>
            <li class="nav-item">
            <Link to="/about" class="nav-link active" aria-current="page"> About</Link>
            </li>
            <li class="nav-item">
            <Link to="/contact-us" class="nav-link active" aria-current="page"> Contact</Link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown link
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div> 
      <div class="container-fluid">
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div> 
    </nav>
)
}

export default Example