import React from "react";
import Layout from "../../commons/NavBar/Layout";
import "./Inscription.css";
import Dropdown from "../../commons/Dropdown/Dropdown";
import Schedule from "../../commons/Schedule/Horario";
import ScheduleDetails from "../../commons/ScheduleDetails/ScheduleDetails";

function Inscripction() {
    const Materias = [
        "Física I",
        "Estructuras Discretas",
    ];

    const Siglas = [
        "INF123",
        "INF122",
    ];

    const options = [
        { id: "1", columna1: 'option1', columna2: 'Opción 1' , columna3:'eriktrolo'},
        { id: "2",  columna1: 'option2', columna2: 'Opción 2' },
        { id: "3",  columna1: 'option3', columna2: 'Opción 3' },
      ];
    
      function handleOptionSelect(option) {
        console.log('Selected option:', option);
      }


    return (
        <Layout>
            <div className="inscription">
                <div className="inscription__column">
                    <h1>Inscripción</h1>
                </div>
                <div className="inscription__column2">
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
                        {Materias.map((materia, indice) => (
                            <Dropdown triggerText={materia} sigla={Siglas[indice]}>
                                <ScheduleDetails data={options}></ScheduleDetails>
                            </Dropdown>
                        ))}
                    </div>
                    <div className="container__column2">
                        <Schedule/>
                    </div>
                </div>
            </div>
        </Layout >
    );
}


export default Inscripction;
