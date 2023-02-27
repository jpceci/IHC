import React, { useState } from 'react';
import "./ScheduleDetails.css";

function ScheduleDetails({ data }) {

    const [selectedRows, setSelectedRows] = useState([]);

    const handleCheckboxChange = (e, id) => {
        if (e.target.checked) {
            setSelectedRows([...selectedRows, id]);
        } else {
            setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
        }
    };

    return (
        <div className='table'>
            <table className='table'>
                <tbody className='table'>
                    {data.map((row) => (
                        <tr key={row.id} className ='rows'>
                            <td className='check'>
                                <input
                                    type="checkbox"
                                    checked={selectedRows.includes(row.id)}
                                    onChange={(e) => handleCheckboxChange(e, row.id)}
                                />
                            </td>
                            <td>{row.columna1}</td>
                            <td>{row.columna2}</td>
                            <td>{row.columna3}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ScheduleDetails;