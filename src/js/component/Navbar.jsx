import React, { useState } from "react";

const Navbar = () => {
    const title = 'Start Bootstrap';
    const nav = ['Home', 'About', 'Services', 'Contact'];

    const renderNavItems = () => {
        let items = [];
        for (let i = 0; i < nav.length; i++) {
            items.push(
                <li key={i} className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">{nav[i]}</a>
                </li>
            );
        }
        return items;
    };

	return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarScroll">
                    <ul className="navbar-nav my-2 my-lg-0 navbar-nav-scroll">
                        {renderNavItems()}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;