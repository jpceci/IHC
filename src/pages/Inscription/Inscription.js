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
    const randomColor = () => {
        return "hsl(" + 360 * Math.random() + ',' +
            (35 + 60 * Math.random()) + '%,' +
            (55 + 40 * Math.random()) + '%)';
    }
    const Materiass = [{
        "id": "1",
        "acronym": "INF123",
        "subject": "FISICA I",
        "isBloqued": false,
        "color": randomColor(),
        "haveError": null,
        "groups": [{
            "group": "SA",
            "teacher": "Miranda",
            "schedule": ["7:00 - 7:45", "7:45 - 8:30", "8:30 - 9:15"],
            "days": ["Lunes", "Miércoles", "Viernes"],
            "quotes": "20"
        }, {
            "group": "SB",
            "teacher": "Zuna Villagomez Ricardo",
            "schedule": ["10:00 - 10:45", "10:45 - 11:30"],
            "days": ["Lunes", "Miércoles", "Viernes"],
            "quotes": "10"
        }, {
            "group": "Z2",
            "teacher": "Mollo Mamani Alberto",
            "schedule": ["10:00 - 10:45", "10:45 - 11:30"],
            "days": ["Martes", "Jueves"],
            "quotes": "03"
        }]
    }, {
        "id": "2",
        "acronym": "INF333",
        "subject": "Estructuras Discretas",
        "isBloqued": false,
        "color": randomColor(),
        "haveError": null,
        "groups": [{
            "group": "SA",
            "teacher": "Braulio",
            "schedule": ["7:00 - 7:45", "7:45 - 8:30", "8:30 - 9:15"],
            "days": ["Lunes", "Miércoles", "Viernes"],
            "quotes": "20"
        }, {
            "group": "Z5",
            "teacher": "Velasco Guaman Angel",
            "schedule": ["10:00 - 10:45", "10:45 - 11:30"],
            "days": ["Lunes", "Miércoles", "Viernes"],
            "quotes": "45"
        }, {
            "group": "NH",
            "teacher": "Lazo Arteaga Carlos",
            "schedule": ["10:00 - 10:45", "10:45 - 11:30"],
            "days": ["Martes", "Jueves"],
            "quotes": "01"
        }]
    }];

    const Siglas = [
        "INF123",
        "INF122",
    ];

    const options = [
        { id: "1", columna1: 'option1', columna2: 'Opción 1', columna3: 'eriktrolo' },
        { id: "2", columna1: 'option2', columna2: 'Opción 2' },
        { id: "3", columna1: 'option3', columna2: 'Opción 3' },
    ];

    const prueba = (valor) => {
        console.log("antes del valor");
        console.log(valor);
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
                        {Materiass.map((materia, indice) => (
                            <Dropdown key={materia.id} triggerText={materia.subject} sigla={materia.acronym}>
                                <ScheduleDetails data={materia} result={prueba}></ScheduleDetails>
                            </Dropdown>
                        ))}
                    </div>
                    <div className="container__column2">
                        <Schedule />
                    </div>
                </div>
            </div>
        </Layout >
    );
}


export default Inscripction;
