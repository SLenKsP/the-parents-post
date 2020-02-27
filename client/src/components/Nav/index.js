import React from 'react'
import './css/materialize.css'
import M from 'materialize-css'
import { Dropdown, Icon, Divider } from 'react-materialize'
import ReactDOM from 'react-dom'
import SignUpModal from "../SignUpModal";
import SignInModal from "../SignInModal";
import Navbar from 'react-materialize/lib/Navbar'

class Nav extends React.Component {
  componentDidMount() {
    // ReactDOM.findDOMNode(this)
    //   .getElementsByClassName('snap')
    //   .dropdown()
  }
  render() {
    return (
      <Navbar
        alignLinks="right"
        brand={<a className="logo" href="#">The Parents Post<Icon>child_care</Icon></a>}
        menuIcon={<Icon>menu</Icon>}
        options={{
          draggable: true,
          edge: 'left',
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true
        }}
      >
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
            outDuration: 250
          }}
          trigger={<a href="#!">Articles{' '}<Icon right>arrow_drop_down</Icon></a>}
        >
          <a href="#">
            Sports
            </a>
          <a href="#">
            Art
            </a>
          <a href="#">
            Camp
            </a>
        </Dropdown>
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
            outDuration: 250
          }}
          trigger={<a href="#!">Activities{' '}<Icon right>arrow_drop_down</Icon></a>}
        >
          <a href="#">
            Health
            </a>
          <a href="#">
            Development
            </a>
          <a href="#">
            Sleep
            </a>
          <a href="#">
            Discipline/Behavior
            </a>
        </Dropdown>
        <SignUpModal />
        <SignInModal />
      </Navbar>
    )
    //     <nav>
    //       <div className="nav-wrapper">
    //         <div className="logo">
    //           <a href="/" className="brand-logo">
    //             The Parents Post<i className="large material-icons left">child_care</i>
    //           </a>
    //         </div>
    //         <div className="nav-list">
    //           <ul className="right" id="links">
    //             {/* <-- Dropdown Trigger -->  */}
    //             <li className="nav-links">
    //               <Dropdown
    //                 menuIcon={<Icon>menu</Icon>}
    //                 options={{
    //                   alignment: 'left',
    //                   autoTrigger: true,
    //                   closeOnClick: true,
    //                   constrainWidth: true,
    //                   container: null,
    //                   coverTrigger: true,
    //                   hover: false,
    //                   inDuration: 150,
    //                   onCloseEnd: null,
    //                   onCloseStart: null,
    //                   onOpenEnd: null,
    //                   onOpenStart: null,
    //                   outDuration: 250,
    //                 }}
    //                 sideNav={<li>Custom node!</li>}
    //                 trigger={
    //                   <a href="#!">
    //                     Activities <Icon right>arrow_drop_down</Icon>
    //                   </a>
    //                 }
    //               >
    //                 <a href="#">Sports</a>
    //                 <a href="#">Camp</a>
    //                 {/* <Divider /> */}
    //                 <a href="#">Art</a>
    //                 <a href="#">Placeholder</a>
    //               </Dropdown>
    //             </li>
    //             <li className="nav-links">
    //               <Dropdown
    //                 menuIcon={<Icon>menu</Icon>}
    //                 options={{
    //                   alignment: 'left',
    //                   autoTrigger: true,
    //                   closeOnClick: true,
    //                   constrainWidth: true,
    //                   container: null,
    //                   coverTrigger: true,
    //                   hover: false,
    //                   inDuration: 150,
    //                   onCloseEnd: null,
    //                   onCloseStart: null,
    //                   onOpenEnd: null,
    //                   onOpenStart: null,
    //                   outDuration: 250,
    //                 }}

    //                 trigger={
    //                   <a href="#!">
    //                     Articles <Icon right>arrow_drop_down</Icon>
    //                   </a>
    //                 }
    //                 sideNav={<li>Custom node!</li>}
    //               >
    //                 <a href="#">Health</a>
    //                 <a href="#">Development</a>
    //                 {/* <Divider /> */}
    //                 <a href="#">Sleep</a>
    //                 <a href="#">Discipline/Behavior</a>

    //               </Dropdown>

    //             </li>
    //             <SignUpModal
    //               sideNav={<li>Custom node!</li>}
    //             />
    //             <SignInModal
    //               sideNav={<li>Custom node!</li>}
    //             />

    //           </ul>
    //         </div>
    //       </div>
    //     </nav>
    //   )
    // }
  }

}
export default Nav;
