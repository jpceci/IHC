import React, { useState } from "react";
import Layout from "../../commons/NavBar/Layout";
import "./SpecialCases.css";
import Schedule from "../../commons/Schedule/Horario";
import ConfirmButton from "../../commons/WindowConfirmation/WindowConfirmation";
import Dropdown from "../../commons/Dropdown/Dropdown";
import ScheduleDetails from "../../commons/ScheduleDetails/ScheduleDetails";

function SpecialCases() {
    const [isActive, setIsActive] = useState(true); //El botón está activo!

    const handleClick = () => {
        setIsActive(!isActive);
    };

    const randomColor = () => {
        return "hsl(" + 360 * Math.random() + ',' +
            (35 + 60 * Math.random()) + '%,' +
            (55 + 40 * Math.random()) + '%)';
    }
    const MateriasInscritas = [{
        "id": "50",
        "acronym": "FIS100",
        "subject": "FISICA I",
        "isBloqued": true,
        "color": randomColor(),
        "haveError": null,
        "groups": {
            "group": "SG",
            "teacher": "Salazar Perez Tomas",
            "description": "Ma 18:15 - 19:45|Ju 18:15 - 19:45",
            "schedule": ["18:15 - 19:00", "19:00 - 19:45"],
            "days": ["Martes", "Jueves"],
            "quotes": "20"
        }
    }, {
        "id": "51",
        "acronym": "MAT101",
        "subject": "CALCULO I",
        "isBloqued": true,
        "color": randomColor(),
        "haveError": null,
        "groups": {
            "group": "H",
            "teacher": "Tejerina Guerra Julio",
            "description": "Mi 7:00 - 9:15|Vi 7:00 - 9:15",
            "schedule": ["7:00 - 7:45", "7:45 - 8:30", "8:30 - 9:15"],
            "days": ["Miércoles", "Viernes"],
            "quotes": "15"
        }
    }, {
        "id": "52",
        "acronym": "LIN100",
        "subject": "INGLES TECNICO I",
        "isBloqued": true,
        "color": randomColor(),
        "haveError": null,
        "groups": {
            "group": "Z2",
            "teacher": "Zuniga Ruiz Wilma",
            "description": "Lu 11:30 - 13:00|Mi 11:30 - 13:00|Vi 11:30 - 13:00",
            "schedule": ["11:30 - 12:15", "12:15 - 13:00"],
            "days": ["Lunes", "Miércoles", "Viernes"],
            "quotes": "09"
        }
    }
    ];

    const Materiass = [{
        "id": "1",
        "acronym": "MAT102",
        "subject": "CALCULO II",
        "isBloqued": false,
        "color": randomColor(),
        "haveError": null,
        "groups": [{
            "group": "SB",
            "teacher": "Morales Mendez Magaly",
            "description": "Ma 13:45 - 15:15|Ju 13:45 - 15:15",
            "schedule": ["13:45 - 14:30", "14:30 - 15:15"],
            "days": ["Martes", "Jueves"],
            "quotes": "24"
        }, {
            "group": "Y1",
            "teacher": "Lazo Arteaga Carlos",
            "description": "Mi 9:15 - 11:30|Vi 9:15 - 11:30",
            "schedule": ["9:15 - 10:00", "10:00 - 10:45", "10:45 - 11:30"],
            "days": ["Miércoles", "Viernes"],
            "quotes": "19"
        }, {
            "group": "SH",
            "teacher": "Velasco Guaman Angel",
            "description": "Ma 9:15 - 11:30|Ju 9:15 - 11:30",
            "schedule": ["9:15 - 10:00", "10:00 - 10:45", "10:45 - 11:30"],
            "days": ["Martes", "Jueves"],
            "quotes": "30"
        }]
    }, {
        "id": "2",
        "acronym": "LIN101",
        "subject": "INGLES TECNICO II",
        "isBloqued": false,
        "color": randomColor(),
        "haveError": null,
        "groups": [{
            "group": "SA",
            "teacher": "Guzman Molina Miriam",
            "description": "Lu 13:00 - 15:15|Mi 13:15 - 15:15|Vi 13:00 - 15:15",
            "schedule": ["13:00 - 13:45", "13:45 - 14:30", "14:30 - 15:15"],
            "days": ["Lunes", "Miércoles", "Viernes"],
            "quotes": "24"
        }, {
            "group": "SB",
            "teacher": "Guzman Molina Miriam",
            "description": "Ma 13:45 - 16:00|Ju 13:45 - 16:00|Vi 13:45 - 16:00",
            "schedule": ["13:45 - 14:30", "14:30 - 15:15", "15:15 - 16:00"],
            "days": ["Martes", "Jueves", "Viernes"],
            "quotes": "19"
        }, {
            "group": "SC",
            "teacher": "Claure Oropeza Eliz",
            "description": "Ma 13:00 - 15:15|Mi 13:00 - 15:15|Vi 13:00 - 15:15",
            "schedule": ["13:00 - 13:45", "13:45 - 14:30", "14:30 - 15:15"],
            "days": ["Martes", "Miércoles", "Viernes"],
            "quotes": "13"
        }]
    }

    ];

    var [schedules, setSchedules] = useState(MateriasInscritas);
    var [selectedRows, setSelectedRows] = useState([{ "group": null }, { "group": null }, { "group": null }, { "group": null }, { "group": null }]);
    const prueba = (valor) => {
        const index = parseInt(valor.id) - 1;
        if (!valor.groups) {
            selectedRows[index].group = null;
        } else {
            selectedRows[index] = valor.groups;
        }
        setSelectedRows([...selectedRows]);
        for (let i = 0; i < schedules.length; i++) {
            const element = schedules[i];
            if (element.id == valor.id) {
                schedules.splice(i, 1);
                corregirErrores(valor)
                break;
            }
        }
        verificarErrores(valor);
    }

    const verificarErrores = (valor) => {
        if (valor.groups) {
            for (let i = 0; i < schedules.length; i++) {
                const subject = schedules[i];
                const schedule = schedules[i].groups.schedule;
                const days = schedules[i].groups.days;
                const scheduleValor = valor.groups.schedule;
                const daysValor = valor.groups.days;
                daysValor.forEach(day => {
                    for (let j = 0; j < scheduleValor.length; j++) {
                        const schedulee = scheduleValor[j];
                        if (days.includes(day) && schedule.includes(schedulee)) {
                            valor.groups.schedule.splice(j, 1);
                            valor.haveError = subject.subject;
                        }
                    }
                });

            }
            setSchedules([...schedules, valor]);
        } else {
            for (let i = 0; i < schedules.length; i++) {
                const subject = schedules[i];
                if (subject.haveError && subject.haveError == valor.subject) {
                    const groups = Materiass[parseInt(subject.id) - 1].groups;
                    groups.forEach(group => {
                        if (group.group == subject.groups.group) {
                            schedules[i].haveError = null;
                            schedules[i].groups = group;
                        }
                    });
                }
            }
            setSchedules(schedules);
        }

    }

    const corregirErrores = (valor) => {
        for (let i = 0; i < schedules.length; i++) {
            const subject = schedules[i];
            if (subject.haveError && subject.haveError == valor.subject) {
                const groups = Materiass[parseInt(subject.id) - 1].groups;
                groups.forEach(group => {
                    if (group.group == subject.groups.group) {
                        schedules[i].haveError = null;
                        schedules[i].groups = group;
                    }
                });
            }
        }
    }

    return (
        <Layout>
            <div className="specialCases">
                <div className="specialCases__column">
                    <h1>Levantamiento</h1>
                </div>
                <div className="specialCases__column2">
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
                        {Materiass.map((materia, indice) => {
                            return (
                                <Dropdown key={materia.id} triggerText={materia.subject} sigla={materia.acronym}>
                                    <ScheduleDetails key={indice} data={materia} result={prueba} selected={selectedRows[indice]}></ScheduleDetails>
                                </Dropdown>)
                        })}
                    </div>
                    <div className="container__column2">
                          <Schedule schedules={schedules} />
                        <div className="buttonContainer">
                            <ConfirmButton />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default SpecialCases;