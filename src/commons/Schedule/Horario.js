import "./Horario.css";

function Schedule() {
    const hours = [
        { hour: 7, minute: "00"},
        { hour: 7, minute: 45 },
        { hour: 8, minute: 30 },
        { hour: 9, minute: 15 },
        { hour: 10, minute: "00"},
        { hour: 10, minute: 45 },
        { hour: 11, minute: 30 },
        { hour: 12, minute: 15 },
        { hour: 13, minute: "00"},
        { hour: 13, minute: 45 },
        { hour: 14, minute: 30 },
        { hour: 15, minute: 15 },
        { hour: 16, minute: "00"},
        { hour: 16, minute: 45 },
        { hour: 17, minute: 30 },
        { hour: 18, minute: 15 },
        { hour: 19, minute: "00"},
        { hour: 19, minute: 45 },
        { hour: 20, minute: 30 },
        { hour: 21, minute: 15 },
        { hour: 22, minute: "00"},
        { hour: 22, minute: 45 },
    ];

    const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

    return (
        <table>
            <thead>
                <tr>
                    <th>Hora</th>
                    {daysOfWeek.map(day => (
                        <th key={day}>{day}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {hours.map(hour => (
                    <tr key={`${hour.hour}:${hour.minute}`}>
                        <td>{`${hour.hour}:${hour.minute}`}</td>
                        {daysOfWeek.map(day => (
                            <td key={`${hour.hour}:${hour.minute}-${day}`}></td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
 

    

}


export default Schedule;