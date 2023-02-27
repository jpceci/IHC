import React from "react";
import "./Menu.css";
import Layout from "../../commons/NavBarMenu/Layout";
import { Link } from 'react-router-dom';


const Menu = () => {
    return (
        <Layout>
            <div className="menu-container">
                <h1> 219023874 - JUSTINIANO REYES ROIER</h1>
            </div>
            <div className="option">
                <h4> Seleccione una Opción:</h4>
            </div>
            <table className="table" style={{ borderCollapse: 'collapse' }}>
                <thead>
                    <th style={{ width: '40%', textAlign: "left", paddingLeft: "3%" }}>Carreras y Periodos</th>
                    <th>Tipo</th>
                    <th></th>
                </thead>
                <tbody style={{border: "1px solid white"}}>
                    <tr>
                        <td style={{ textAlign: "left", paddingLeft: "4%" }}>187 - 3 INGENIERÍA INFORMÁTICA SANTA CRUZ 1 - 2023</td>
                        <td className="type">INSCRIPCIÓN</td>
                        <td><Link to="/inscription" className="link">[SELECCIONAR]</Link></td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: "left", paddingLeft: "4%" }}>187 - 3 INGENIERÍA INFORMÁTICA SANTA CRUZ 1 - 2023</td>
                        <td className="type">ADICIÓN</td>
                        <td><Link to="/addition" className="link">[SELECCIONAR]</Link></td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: "left", paddingLeft: "4%" }}>187 - 3 INGENIERÍA INFORMÁTICA SANTA CRUZ 1 - 2023</td>
                        <td className="type">LEVANTAMIENTO</td>
                        <td><Link to="/specialCases" className="link">[SELECCIONAR]</Link></td>
                    </tr>
                </tbody>
            </table>
            <div className="option2">
                <h3>Éstas son tus transacciones</h3>
            </div>
        </Layout>

    );

};



export default Menu;
