import React, { useState } from 'react';
import FormRegister from './register';
import FormLogin from './login';


const Auth = () => {
  const [isRegister, setIsRegister] = useState(true);

  return (
    <div>
        
                {isRegister ? (
                <FormRegister toggleForm={() => setIsRegister(false)} path="/register" element={<FormRegister/>}/>
            ) : (
                <FormLogin toggleForm={() => setIsRegister(true)} path="/login" element={<FormLogin/>}/>
            )}
        
      
    </div>
  );
};

export default Auth;
