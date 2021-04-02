import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import './Header.css'

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    return (
        <div className="container">
            <ul className="nav-bar">
                <div>
                    <h1>
                        To The Minute
                    </h1>
                </div>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/orders">Orders</Link>
                </li>
                <li>
                    <Link to="/admin">Admin</Link>
                </li>
                <li>
                    <Link to="/deals">Deals</Link>
                </li>
                <li>
                    {
                        loggedInUser.isSignedIn
                            ? <li style={{ marginTop: '-10px' }}>
                                {loggedInUser.name}
                            </li>
                            : <li>
                                <Link to="/login">
                                    <button id="login-btn" className="btn btn-success">Login</button>
                                </Link>
                            </li>
                    }
                </li>
            </ul>
        </div>
    );
};

export default Header;