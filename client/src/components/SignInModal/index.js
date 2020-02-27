import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import SignIn from "../SignIn/index";

class SignInModal extends Component {
    componentDidMount() {
        const options = {
            onOpenStart: () => {
                console.log("Open Start");
            },
            onOpenEnd: () => {
                console.log("Open End");
            },
            onCloseStart: () => {
                console.log("Close Start");
            },
            onCloseEnd: () => {
                console.log("Close End");
            },
            inDuration: 250,
            outDuration: 250,
            opacity: 0.5,
            dismissible: false,
            startingTop: "4%",
            endingTop: "10%"
        };
        M.Modal.init(this.Modal, options);
    }

    render() {
        return (
            <>
                <a
                    className="waves-effect waves-light btn modal-trigger"
                    data-target="modal2"
                >
                    Sign In
        </a>

                <div
                    ref={Modal => {
                        this.Modal = Modal;
                    }}
                    id="modal2"
                    className="modal"
                >
                    <div className="modal-content blue-text">
                        <SignIn />
                    </div>
                    <div className="modal-footer">
                        <a href="#" className="modal-close waves-effect waves-red btn-flat">
                            Cancel
                        </a>

                    </div>
                </div>
            </>
        );
    }
}

export default SignInModal;