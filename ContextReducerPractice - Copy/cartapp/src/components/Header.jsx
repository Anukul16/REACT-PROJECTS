import React from 'react';
import { Link } from 'react-router-dom';
import { CartState } from '../context/Context';
const Header = () => {

    const { cartState:{cart}} =CartState()
    // console.log(cart);
    return (
        <>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            Home
                        </Link>
                        <Link to="/cart" className="btn btn-primary position-relative">
                            <i className="fa-sharp fa-solid fa-cart-shopping"></i>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {cart.length}
                                <span className="visually-hidden">unread messages</span>
                            </span>
                        </Link>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Header;
