import React from 'react'

function Example(){
return(
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid"> 
        <a class="navbar-brand" href="#">Employee Management System</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
         
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#"
               data-bs-toggle="tooltip" data-bs-placement="bottom" title="Check Employees"
              >Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Team Leads</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
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