import React from "react";

function Footer() {
    return (
        <footer className="footer">
            <span>The Parents Post {new Date().getFullYear()}
                {/* <i class="small material-icons">Copyright</i> */}
                © Sagar Patel, Mark Overman, Samantha Lynnes
            </span>
        </footer>
    );
}

export default Footer;