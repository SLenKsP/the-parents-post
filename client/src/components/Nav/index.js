import React from "react";
import "./css/materialize.css";
import ActivitiesDropdown from "../ActivitiesDropdown";
import ArticlesDropdown from "../ArticlesDropdown";
// import M from "materialize-css";

// With Materialize
// // function Nav() {
// //   return (
// class Nav extends Component {
//   componentDidMount() {
//     // auto initalize 
//     M.AutoInit();
//   }


function Nav() {

  return (

    <nav>
      <div class="nav-wrapper">
        <a href="#!" class="brand-logo">The Parents Post<i class="material-icons left">child_care</i></a>
        <ul class="center" id="links">
          {/* <-- Dropdown Trigger -->  */}
          <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">Activities<i class="material-icons right">arrow_drop_down</i></a>
            {/* <ul id="dropdown1" class="dropdown-content">
              <li><a href="#!">Sports</a></li>
              <li><a href="#!">Camp</a></li>
              <li><a href="#!">Art</a></li>
              <li><a href="#!">Placeholder</a></li>
            </ul> */}
            <ActivitiesDropdown

            />
          </li>
          <li><a class="dropdown-trigger" href="#!" data-target="dropdown2">Articles<i class="material-icons right">arrow_drop_down</i></a>
            {/* <ul id="dropdown2" class="dropdown-content">
              <li><a href="#!">Health</a></li>
              <li><a href="#!">Development</a></li>
              <li><a href="#!">Sleep</a></li>
              <li><a href="#!">Discipline/Behavior</a></li>
            </ul> */}
            <ArticlesDropdown
            />
          </li>
          <li><a class="dropdown-trigger" href="#!" data-target="dropdown3">Placeholder<i class="material-icons right">arrow_drop_down</i></a>
            <ul id="dropdown3" class="dropdown-content">
              <li><a href="#!">one</a></li>
              <li><a href="#!">two</a></li>
              <li><a href="#!">three</a></li>
            </ul>
          </li>
        </ul>
        <a href="#!" class="right-align" id="login">Sign In | Sign Up</a>
      </div>
    </nav >
  );
}



// Boilerplate
// function Nav() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//       <a className="navbar-brand" href="/">
//         React Reading List
//       </a>
//     </nav>
//   );
// }

export default Nav;
