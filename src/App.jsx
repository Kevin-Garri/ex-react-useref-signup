import { useState } from 'react';
function App() {

  // Campi 
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [experienceYears, setExperienceYears] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !fullName.trim() ||
      !username.trim() ||
      !password.trim() ||
      !specialization.trim() ||
      !experienceYears.trim() ||
      experienceYears <= 0 ||
      !description.trim()
    ) {
      alert('Errore: Tutti i campi sono obbligatori!');
      return;
    }
    console.log('submit effettuato', {
      fullName,
      username,
      password,
      specialization,
      experienceYears,
      description
    });

  }

  return (
    <div>
      <h1>Web Developer Signup</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Nome Completo</p>
          <input type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)} />
        </label>
        <label>
          <p>Username</p>
          <input type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          <p>Nome Completo</p>
          <input type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </label>
        <label>
          <p>Specializzazione</p>
          <select
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
          >
            <option value="Full Stack">Full Stack</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
          </select>
        </label>
        <label>
          <p>Anni di esperienza</p>
          <input type="number"
            value={experienceYears}
            onChange={(e) => setExperienceYears(e.target.value)}
          />
        </label>
        <label>
          <p>Descrizione</p>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <button type="submit">Registrati</button>
      </form>

    </div >
  )
}



export default App
