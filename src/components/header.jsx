import { NavLink } from "react-router"


function Header() {
    return(
        <header>
            <div className="logo">
                <h3>My Websait</h3>
            </div>
            <nav>
                <NavLink to="/home" >Home</NavLink>
                <NavLink to="/about" >About Us</NavLink>
                <NavLink to="/contacts" >Contact Us</NavLink>
            </nav>
        </header>
    )
}

export default Header