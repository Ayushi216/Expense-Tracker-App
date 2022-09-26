import React, { useContext } from 'react';
import AuthContext from './store/auth-context';
import AuthForm from './Components/Authentication/authForm';


function App() {
  const authCtx = useContext (AuthContext)

  return (
    <main>
      <AuthForm />

    </main>
  );
}

export default App;
