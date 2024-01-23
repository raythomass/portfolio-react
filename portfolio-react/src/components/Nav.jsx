import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <ul className="navigation">
                <li>
                    <Link to='/about' >About</Link>
                </li>
                <li>
                    <Link to='/projects' >Projects</Link>
                </li>
                <li>
                    <Link to='/' >RAY THOMAS</Link>
                </li>
                <li>
                    <Link to='/contact' >Contact</Link>
                </li>
                <li>
                    <Link to='/resume' >Resume</Link>
                </li>
            </ul>
        </nav>
    )


}

export default Nav;