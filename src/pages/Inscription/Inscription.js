import React, { useState, useEffect } from "react";
import Layout from "../../commons/NavBar/Layout";
import "./Inscription.css";
import Dropdown from "../../commons/Dropdown/Dropdown";
import Schedule from "../../commons/Schedule/Horario";
import ScheduleDetails from "../../commons/ScheduleDetails/ScheduleDetails";
import ConfirmButton from "../../commons/WindowConfirmation/WindowConfirmation";

function Inscripction() {
    const randomColor = () => {
        return "hsl(" + 360 * Math.random() + ',' +
            (35 + 60 * Math.random()) + '%,' +
            (55 + 40 * Math.random()) + '%)';
    }
    const Materiass = [
        {
            "id": "1",
            "acronym": "FIS100",
            "subject": "FISICA I",
            "isBloqued": false,
            "color": randomColor(),
            "haveError": null,
            "groups": [{
                "group": "SG",
                "teacher": "Salazar Perez Tomas",
                "description": "Ma 18:15 - 19:45|Ju 18:15 - 19:45",
                "schedule": ["18:15 - 19:00", "19:00 - 19:45"],
                "days": ["Martes", "Jueves"],
                "quotes": "20"
            }, {
                "group": "SI",
                "teacher": "Sanches Hervas Jose",
                "description": "Lu 18:15 - 19:45|Mie 18:15 - 19:45|Vi 18:15 - 19:45",
                "schedule": ["18:15 - 19:00", "19:00 - 19:45"],
                "days": ["Lunes", "Miércoles", "Viernes"],
                "quotes": "10"
            }, {
                "group": "SK",
                "teacher": "Cayoja Lucana Victor",
                "description": "Lu 13:00 - 14:30|Mi 13:00 - 14:30|Vi 13:00 - 14:30",
                "schedule": ["13:00 - 13:45", "13:45 - 14:30"],
                "days": ["Lunes", "Miércoles", "Viernes"],
                "quotes": "03"
            }]
        }, {
            "id": "2",
            "acronym": "INF119",
            "subject": "ESTRUCTURAS DISCRETAS",
            "isBloqued": false,
            "color": randomColor(),
            "haveError": null,
            "groups": [{
                "group": "SE",
                "teacher": "Vargas Castillo Ciro",
                "description": "Ma 19:00 - 21:15|Ju 19:00 - 21:15",
                "schedule": ["19:00 - 19:45", "19:45 - 20:30", "20:30 - 21:15"],
                "days": ["Martes", "Jueves"],
                "quotes": "24"
            }, {
                "group": "SF",
                "teacher": "Martinez Cardona Sarah",
                "description": "Lu 8:30 - 10:00|Mi 8:30 - 10:00|Vi 8:30 - 10:00",
                "schedule": ["8:30 - 9:15", "9:15 - 10:00"],
                "days": ["Lunes", "Miércoles", "Viernes"],
                "quotes": "19"
            }, {
                "group": "SH",
                "teacher": "Miranda Carrasco Carlos",
                "description": "Ma 10:00 - 11:30|Ju 10:00 - 11:30",
                "schedule": ["10:00 - 10:45", "10:45 - 11:30"],
                "days": ["Martes", "Jueves"],
                "quotes": "10"
            }]
        }, {
            "id": "3",
            "acronym": "MAT101",
            "subject": "CALCULO I",
            "isBloqued": false,
            "color": randomColor(),
            "haveError": null,
            "groups": [{
                "group": "F1",
                "teacher": "Avendano Gonzales Eudal",
                "description": "Ma 18:15 - 20:30|Ju 18:15 - 20:30",
                "schedule": ["18:15 - 19:00", "19:00 - 19:45", "19:45 - 20:30"],
                "days": ["Martes", "Jueves"],
                "quotes": "20"
            }, {
                "group": "H2",
                "teacher": "Tejerina Guerra Julio",
                "description": "Mi 7:00 - 9:15|Vi 7:00 - 9:15",
                "schedule": ["7:00 - 7:45", "7:45 - 8:30", "8:30 - 9:15"],
                "days": ["Miércoles", "Viernes"],
                "quotes": "15"
            }, {
                "group": "SZ",
                "teacher": "Calizaya Ajhuacho Edwin",
                "description": "Lu 7:00 - 8:30|Mi 7:00 - 8:30|Vi 7:00 - 8:30",
                "schedule": ["7:00 - 7:45", "7:45 - 8:30"],
                "days": ["Lunes", "Miércoles", "Viernes"],
                "quotes": "09"
            }]
        }, {
            "id": "4",
            "acronym": "LIN100",
            "subject": "INGLES TECNICO I",
            "isBloqued": false,
            "color": randomColor(),
            "haveError": null,
            "groups": [{
                "group": "NW",
                "teacher": "Claure Oropeza Eliz",
                "description": "Ma 13:00 - 15:15|Ju 13:00 - 15:15",
                "schedule": ["13:00 - 13:45", "13:45 - 14:30", "14:30 - 15:15"],
                "days": ["Martes", "Jueves"],
                "quotes": "20"
            }, {
                "group": "NX",
                "teacher": "Guzman Molina Miriam",
                "description": "Ma 13:00 - 15:15|Ju 13:00 - 15:15",
                "schedule": ["13:00 - 13:45", "13:45 - 14:30", "14:30 - 15:15"],
                "days": ["Martes", "Jueves"],
                "quotes": "15"
            }, {
                "group": "Z2",
                "teacher": "Zuniga Ruiz Wilma",
                "description": "Lu 11:30 - 13:00|Mi 11:30 - 13:00|Vi 11:30 - 13:00",
                "schedule": ["11:30 - 12:15", "12:15 - 13:00"],
                "days": ["Lunes", "Miércoles", "Viernes"],
                "quotes": "09"
            }]
        }, {
            "id": "5",
            "acronym": "INF110",
            "subject": "INTRODUCCION A LA INFORMATICA",
            "isBloqued": false,
            "color": randomColor(),
            "haveError": null,
            "groups": [{
                "group": "SA",
                "teacher": "Zuna Villagomez Ricardo",
                "description": "Ma 8:30 - 10:00|Ju 8:30 - 10:00",
                "schedule": ["8:30 - 9:15", "9:15 - 10:00"],
                "days": ["Martes", "Jueves"],
                "quotes": "24"
            }, {
                "group": "SB",
                "teacher": "Mollo Mamani Alberto",
                "description": "Lu 20:30 - 22:00|Mi 20:30 - 22:00|Vi 20:30 - 22:00",
                "schedule": ["20:30 - 21:15", "21:15 - 22:00"],
                "days": ["Lunes", "Miércoles", "Viernes"],
                "quotes": "19"
            }, {
                "group": "SC",
                "teacher": "Garzon Cuellar Angelica",
                "description": "Ma 20:30 - 22:00|Ju 20:30 - 22:00",
                "schedule": ["20:30 - 21:15", "21:15 - 22:00"],
                "days": ["Martes", "Jueves"],
                "quotes": "13"
            }]

        }];

    var [schedules, setSchedules] = useState([]);
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
        </Layout >
    );
}


export default Inscripction;
