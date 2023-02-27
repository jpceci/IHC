import React, { useState }  from "react";
import Layout from "../../commons/NavBar/Layout";
import "./Addition.css";

function Addition() {

    const [isActive, setIsActive] = useState(true); //El botón está activo!

    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <Layout>
            <div className="addition">
                <div className="addition__column">
                    <h1>Adición</h1>
                </div>
                <div className="addition__column2">
                    <h5> ESTUDIANTE:</h5>
                    <h3>JUSTINIANO REYES ROIER</h3>
                    <h4>219023874</h4>
                    <h2>P.P.A.C. 68</h2>
                </div>
            </div>
            <div className="container">
                <nav className="container__navbar">
                    <nav className="container__navbar1">
                        <h4>Nombre de la materia</h4>
                    </nav>
                    <nav className="container__navbar2">
                        <h3> Sigla</h3>
                    </nav>
                    <nav className="container__navbar3">
                        <h2> Horario</h2>
                    </nav>
                </nav>
                <div className="container__content">
                    <div className="container__column">
                        {/* AQUI VA EL DROPDOWN  Y EL SCHEDULE DETAILS*/}
                    </div>
                    <div className="container__column2">
                        {/* AQUI VA EL HORARIO */}
                        <div className="buttonContainer">
                            <button
                                className={`button ${isActive ? 'active' : 'inactive'}`}
                                onClick={handleClick}
                            >
                                {isActive ? 'GRABAR MATERIAS SELECCIONADAS' : 'GRABAR MATERIAS SELECCIONADAS'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Addition;