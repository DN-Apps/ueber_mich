import React, { useState } from 'react';
import './AddUser.css';

function AddUser() {
  // Lokaler Zustand für Formulareingaben
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Handler für das Formular-Submit
  const handleSubmit = async (e) => {
    e.preventDefault(); // Verhindert das Neuladen der Seite

    // API-Anfrage an das Backend
    try {
      const response = await fetch('http://localhost:5000/api/benutzer/hinzufuegen', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setSuccessMessage('Benutzer erfolgreich hinzugefügt!');
        setErrorMessage('');
        setName('');
        setEmail('');
        setPassword('');
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.error || 'Fehler beim Hinzufügen des Benutzers.');
        setSuccessMessage('');
      }
    } catch (error) {
      setErrorMessage('Serverfehler: ' + error.message);
      setSuccessMessage('');
    }
  };

  return (
    <div className="add-user">
      <h2>Benutzer hinzufügen</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-Mail:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Passwort:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Benutzer hinzufügen</button>
      </form>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default AddUser;
