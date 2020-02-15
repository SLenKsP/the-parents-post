import React from 'react'
import './css/materialize.css'
import ActivitiesDropdown from '../ActivitiesDropdown'
import ArticlesDropdown from '../ArticlesDropdown'
import M from 'materialize-css'
import { Dropdown, Icon, Divider } from 'react-materialize'
import ReactDOM from 'react-dom'

class Nav extends React.Component {
  componentDidMount() {
    // ReactDOM.findDOMNode(this)
    //   .getElementsByClassName('snap')
    //   .dropdown()
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <div className="logo">
            <a href="#!" className="brand-logo">
              The Parents Post<i class="large material-icons left">child_care</i>
            </a>
          </div>
          <div className="nav-list">
            <ul className="right" id="links">
              {/* <-- Dropdown Trigger -->  */}
              <li className="nav-links">
                <a className="dropdown-trigger" href="#!" data-target="dropdown1">
                  Activities<i class="material-icons right">arrow_drop_down</i>
                </a>
                {/* <ul id="dropdown1" class="dropdown-content">
                <li><a href="#!">Sports</a></li>
                <li><a href="#!">Camp</a></li>
                <li><a href="#!">Art</a></li>
                <li><a href="#!">Placeholder</a></li>
              </ul> */}
                <ActivitiesDropdown />
              </li>
              <li className="nav-links">
                <a className="dropdown-trigger" href="#!" data-target="dropdown2">
                  Articles<i class="material-icons right">arrow_drop_down</i>
                </a>
                {/* <ul id="dropdown2" class="dropdown-content">
                <li><a href="#!">Health</a></li>
                <li><a href="#!">Development</a></li>
                <li><a href="#!">Sleep</a></li>
                <li><a href="#!">Discipline/Behavior</a></li>
              </ul> */}
                <ArticlesDropdown />
              </li>
              <li className="nav-links">
                <a className="dropdown-trigger" href="#!" data-target="dropdown3">
                  Placeholder<i class="material-icons right">arrow_drop_down</i>
                </a>
                <ul id="dropdown3" className="dropdown-content">
                  <li>
                    <a href="#!">one</a>
                  </li>
                  <li>
                    <a href="#!">two</a>
                  </li>
                  <li>
                    <a href="#!">three</a>
                  </li>
                </ul>
              </li>
              <li>
                <Dropdown
                  options={{
                    alignment: 'left',
                    autoTrigger: true,
                    closeOnClick: true,
                    constrainWidth: true,
                    container: null,
                    coverTrigger: true,
                    hover: false,
                    inDuration: 150,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    outDuration: 250,
                  }}
                  trigger={
                    <a href="#!">
                      Dropdown <Icon right>arrow_drop_down</Icon>
                    </a>
                  }
                >
                  <a href="#">one</a>
                  <a href="#">two</a>
                  <Divider />
                  <a href="#">three</a>
                </Dropdown>
              </li>
              <li className="nav-links">
                <a href="#!" className="login">
                  Sign In | Sign Up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

// With Materialize
// function Nav() {

// }

// function Navbar() {
//   return (
//     <div>
//       <Navbar
//         alignLinks="right"
//         brand={<a className="brand-logo" href="#">Logo</a>}
//         menuIcon={<Icon>menu</Icon>}
//         options={{
//           draggable: true,
//           edge: 'left',
//           inDuration: 250,
//           onCloseEnd: null,
//           onCloseStart: null,
//           onOpenEnd: null,
//           onOpenStart: null,
//           outDuration: 200,
//           preventScrolling: true
//         }}
//       >
//         <Dropdown
//           options={{
//             alignment: 'left',
//             autoTrigger: true,
//             closeOnClick: true,
//             constrainWidth: true,
//             container: null,
//             coverTrigger: true,
//             hover: false,
//             inDuration: 150,
//             onCloseEnd: null,
//             onCloseStart: null,
//             onOpenEnd: null,
//             onOpenStart: null,
//             outDuration: 250
//           }}
//           trigger={<a href="#!">Activities{' '}<Icon right>arrow_drop_down</Icon></a>}
//         >
//           <a href="#">
//             Sports
//     </a>
//           <a href="#">
//             Camp
//     </a>
//           <a href="#">
//             Art
//     </a>
//         </Dropdown>
//         <Dropdown
//           options={{
//             alignment: 'left',
//             autoTrigger: true,
//             closeOnClick: true,
//             constrainWidth: true,
//             container: null,
//             coverTrigger: true,
//             hover: false,
//             inDuration: 150,
//             onCloseEnd: null,
//             onCloseStart: null,
//             onOpenEnd: null,
//             onOpenStart: null,
//             outDuration: 250
//           }}
//           trigger={<a href="#!">Articles{' '}<Icon right>arrow_drop_down</Icon></a>}
//         >
//           <a href="#">
//             Health
//     </a>
//           <a href="#">
//             Development
//     </a>
//           <a href="#">
//             Sleep
//     </a>
//           <a href="#">
//             Discipline/Behavior
//     </a>
//         </Dropdown>
//         <NavItem href="">
//           Sign In | Sign Up
//   </NavItem>
//       </Navbar>
//     </div>
//   )
// }

export default Nav
