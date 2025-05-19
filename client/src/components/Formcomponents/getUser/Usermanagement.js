import React, { useEffect, useState } from 'react';
import AddUser from '../addUser/AddUser';
import './Usermanagement.css'

function App() {
    const [benutzer, setBenutzer] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/benutzer/alle')
            .then(response => response.json())
            .then(data => setBenutzer(data))
            .catch(error => console.error('Fehler:', error));
    }, []);

    return (
        <div>
            <h1>Benutzerliste</h1>
            <AddUser></AddUser>
            {/*Seite aktualisiert noch nicht nach dem Anlegen eines Users*/}
            <div className='usertable'>
                <table>
                    <tr>
                        <th>Benutzername</th>
                        <th>E-Mail</th>
                    </tr>
                        {benutzer.map(user => (
                            <tr>
                                <td key={user.id}>{user.name}</td>
                                <td key={user.id}>{user.email}</td>
                            </tr>
                        ))}   
                </table>
            </div>
        </div>
    );
}

export default App;