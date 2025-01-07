import {  NavLink } from "react-router-dom";

export default function Navbar() {
  return (

        <nav className="navbar navbar-expand-lg  text-uppercase p-4 mainBanck">
  <div className="container">
    <NavLink className="navbar-brand" to={"/home"}>Start Framework</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-bold fs-6">
        <li className="nav-item ">
          <NavLink className="nav-link" aria-current="page" to={"/about"}>about</NavLink>
        </li>
        <li className="nav-item  mx-lg-4">
          <NavLink className="nav-link" to={"/portfolio"}>portfolio
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={"/contact"}>contact
          </NavLink>
        </li>
        
      </ul>
     
    </div>
  </div>
</nav>
  )
}
