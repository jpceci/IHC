import "./Horario.css";
import React, { useState } from "react";

function Schedule() {

    const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const hourss = ["7:00 - 7:45", "7:45 - 8:30", "8:30 - 9:15", "9:15 - 10:00", "10:00 - 10:45", "10:45 - 11:30", "11:30 - 12:15",
        "12:15 - 13:00", "13:00 - 13:45", "13:45 - 14:30", "14:30 - 15:15", "15:15 - 16:00", "16:45 - 17:30", "17:30 - 18:15", "18:15 - 19:00",
        "19:00 - 19:45", "19:45 - 20:30", "20:30 - 21:15", "21:15 - 22:00"];

    const randomColor = () => {
        return "hsl(" + 360 * Math.random() + ',' +
            (35 + 60 * Math.random()) + '%,' +
            (55 + 40 * Math.random()) + '%)';
    }
    var [mensajeError, setMensajeError] = useState([]);

    const schedules = [{
        "schedule": ["7:00 - 7:45", "7:45 - 8:30", "8:30 - 9:15"],
        "acronym": "SH-INF119",
        "days": ["Lunes", "Miércoles", "Viernes"],
        "isBloqued": true,
        "color": randomColor(),
        "haveError": null,
    }, {
        "schedule": ["8:30 - 9:15", "9:15 - 10:00"],
        "acronym": "SM-FIS100",
        "days": ["Martes", "Jueves"],
        "isBloqued": false,
        "color": randomColor(),
        "haveError": null,
    }]
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Horario</th>
                        {diasSemana.map((dia) => (
                            <th key={dia}>{dia}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {hourss.map((hours) => (
                        <tr key={hours}>
                            <td className="hours">{hours}</td>
                            {diasSemana.map((dia) => {
                                for (let index = 0; index < schedules.length; index++) {
                                    const subject = schedules[index];
                                    const schedule = subject.schedule;
                                    const days = subject.days;
                                    if (schedule.length == 0 && days.includes(dia)) {
                                        const text = "Hay un cruce de materias con '" + subject.haveError + "' y '" + subject.acronym + "'";
                                        if (!mensajeError.includes(text)) {
                                            mensajeError.push(text);
                                        }
                                    }
                                    if (schedule.slice(1).includes(hours) && days.includes(dia)) {
                                        return null;
                                    } else if (schedule.includes(hours) && days.includes(dia)) {
                                        const rowSpan = schedule.length;
                                        if (subject.isBloqued) {
                                            return <td className="subjectBloqued"
                                                key={`${dia}-${hours}`} rowSpan={rowSpan}>{subject.acronym}</td>;
                                        }
                                        if (subject.haveError) {
                                            const text = "Hay un cruce de materias con '" + subject.haveError + "' y '" + subject.acronym + "'";
                                            if (!mensajeError.includes(text)) {
                                                mensajeError.push(text);
                                            }
                                            return <td style={{ backgroundColor: subject.color }} className="subjectError"
                                                key={`${dia}-${hours}`} rowSpan={rowSpan}>{subject.acronym}</td>;
                                        }
                                        return <td style={{ backgroundColor: subject.color }} className="subject"
                                            key={`${dia}-${hours}`} rowSpan={rowSpan}>{subject.acronym}</td>;
                                    }
                                }
                                return <td className="subject" key={`${dia}-${hours}`}></td>;
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
            {mensajeError.map((mensaje) => {
                return <h3 className="error">  {mensaje} </h3>;
            })}
        </>
    );
}


export default Schedule;