import React, {useState, useContext} from 'react';


const FormLogin = ({ toggleForm }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const { login } = useContext(AuthContext);
    const { login } = useContext();



  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);

  };

  return (
    <div className='row' >
      <h1>LOGIN</h1>
      <form className="row" onSubmit={handleSubmit}>
        <div>
          <label> Username: </label>
          <input type="text" id="username" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} required /> <br />
        </div>
        <div>
          <label> Password: </label>
          <input type="password" id="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} required /> <br />
        </div>
        <button type="submit">Login</button>
      </form>
      si vous avez deja un compte alors<button type="button" onClick={toggleForm}>Register</button>
    </div>
  );
};

export default FormLogin;
