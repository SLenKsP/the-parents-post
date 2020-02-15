import React from 'react'
import './css/materialize.css'
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
              The Parents Post<i className="large material-icons left">child_care</i>
            </a>
          </div>
          <div className="nav-list">
            <ul className="right" id="links">
              {/* <-- Dropdown Trigger -->  */}
              <li className="nav-links">
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
                      Activities <Icon right>arrow_drop_down</Icon>
                    </a>
                  }
                >
                  <a href="#">Sports</a>
                  <a href="#">Camp</a>
                  {/* <Divider /> */}
                  <a href="#">Art</a>
                  <a href="#">Placeholder</a>
                </Dropdown>
              </li>
              <li className="nav-links">
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
                      Articles <Icon right>arrow_drop_down</Icon>
                    </a>
                  }
                >
                  <a href="#">Health</a>
                  <a href="#">Development</a>
                  {/* <Divider /> */}
                  <a href="#">Sleep</a>
                  <a href="#">Discipline/Behavior</a>
                </Dropdown>
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


export default Nav
