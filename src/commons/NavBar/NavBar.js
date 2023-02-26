import React from 'react';
import { useRef } from 'react';
import "./NavBar.css";

function NavigationBar() {
    const navRef = useRef();

    return (
        <div className="main_container">
            <nav className="navbar">
                <h1>UAGRM</h1>
                <nav ref={navRef}>
                    <a href={"/menu"}> Menú </a>
                </nav>
                <button className="blue_btn">
                    Salir
                </button>
            </nav>
        </div>
    );
}

export default NavigationBar;
