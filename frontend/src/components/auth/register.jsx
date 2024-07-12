import React, {useState} from 'react';


const FormRegister = ({ toggleForm }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState(''); 


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(username);

        const response = await fetch('http://localhost:5000/api/auth/register', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({ username, password }),
        });
        
        if (response.ok) {
            console.log("User registered successfully");
            setUsername('');
            setPassword('');
        } else {
            const errorData = await response.json();
            console.error("Failed to register:", errorData.message);
        }
    };
    return(
        <div className='row'>
            <h1>REGISTER</h1>
            <form className="row" onSubmit={handleSubmit}>
                <div>
                    <label> Username: </label>
                    <input type="text" id="" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} required/> <br/>
                </div>
                <div>
                    <label> Password: </label>
                    <input type="text" id="" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} required/> <br/>
                </div>
                <button type="submit">Register</button>
            </form>
            vous avez deja un compte? si oui<button type="button" onClick={toggleForm}>Login</button>
        </div>
        
    )
}
export default FormRegister