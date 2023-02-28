import React, { useState, useEffect } from 'react';
import "./ScheduleDetails.css";

function ScheduleDetails({ data, result }) {
    var [selectedRow, setSelectedRow] = useState();

    useEffect(() => {
        result(selectedRow);
    }, [selectedRow]);

    const handleCheckboxChange = (e, id) => {
        setSelectedRow(id);

    };

    return (
        <div style={{ marginTop: "2.5%", paddingLeft: "4%", maxWidth: "90%" }}>
            <table>
                <tbody>
                    {data.groups.map((materia) => (
                        <tr key={materia.group}>
                            <td className='description'>
                                <div>{materia.group + "-" + materia.teacher}<br></br></div>
                                <div className="quotas">Cupos - {materia.quotes}</div>

                                <div>Lu 10:00 - 11:30 | Ma 10:00 - 11:30</div>
                            </td>
                            <td className='description'>
                                <input
                                    type="checkbox"
                                    style={{ width: "22px", height: "17px", float: "right", borderColor: "black" }}
                                    checked={selectedRow === materia}
                                    onChange={(e) => handleCheckboxChange(e, materia)}
                                />

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ScheduleDetails;