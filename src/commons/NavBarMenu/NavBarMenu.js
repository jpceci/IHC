import React from 'react';
import "./NavBarMenu.css";
import { useNavigate } from 'react-router-dom';

function NavigationBar() {

    const navigate = useNavigate();
   
    return (
        <div className="navContainer">
            <h1>UAGRM</h1>
            <button className="blue_btn" onClick={() => navigate("/")}>
                Cerrar Sesión
            </button>
        </div>

    );
}

export default NavigationBar;