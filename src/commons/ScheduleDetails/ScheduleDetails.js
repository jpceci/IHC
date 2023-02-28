import React, { useState, useEffect } from 'react';
import "./ScheduleDetails.css";

function ScheduleDetails({ data, result, selected }) {
    // var [selectedRow, setSelectedRow] = useState();
    // console.log("Me he generado");
    // console.log(element);

    // useEffect(() => {
    //     if (selectedRow) {
    //         const schedule = {
    //             "id": data.id,
    //             "acronym": data.acronym,
    //             "subject": data.subject,
    //             "isBloqued": data.isBloqued,
    //             "color": data.color,
    //             "haveError": data.haveError,
    //             "groups": selectedRow,
    //         };
    //         result(schedule);
    //     }
    // }, [selectedRow]);

    const handleCheckboxChange = (e, id) => {
        // console.log(id);
        if (e.target.checked) {
            const schedule = {
                "id": data.id,
                "acronym": data.acronym,
                "subject": data.subject,
                "isBloqued": data.isBloqued,
                "color": data.color,
                "haveError": data.haveError,
                "groups": id,
            };
            result(schedule);
            // setSelectedRow(id);
        } else {
            const schedule = {
                "id": data.id,
                "acronym": data.acronym,
                "subject": data.subject,
                "isBloqued": data.isBloqued,
                "color": data.color,
                "haveError": data.haveError,
                "groups": null,
            };
            result(schedule);
            // setSelectedRow();
        }
        // setSelectedRow(id);
    };

    return (
        <div style={{ marginTop: "2.5%", paddingLeft: "4%", maxWidth: "90%" }}>
            <table>
                <tbody>
                    {data.groups.map((materia) => {
                        return (
                            <tr key={materia.group}>
                                <td className='description'>
                                    <div>{materia.group + "-" + materia.teacher}<br></br></div>
                                    <div className="quotas">Cupos - {materia.quotes}</div>

                                    <div>{materia.description}</div>
                                </td>
                                <td className='description'>
                                    <input
                                        type="checkbox"
                                        style={{ width: "22px", height: "17px", float: "right", borderColor: "black" }}
                                        checked={selected.group === materia.group}
                                        onChange={(e) => handleCheckboxChange(e, materia)}
                                    />
                                </td>

                            </tr>)
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default ScheduleDetails;