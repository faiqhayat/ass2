import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [userData, setUserData] = useState({ username: '', password: '' });

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/auth/login', userData);
      alert('Login successful!');
    } catch (error) {
      console.error('Login error', error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={userData.username}
        onChange={(e) => setUserData({ ...userData, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={userData.password}
        onChange={(e) => setUserData({ ...userData, password: e.target.value })}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default App;
