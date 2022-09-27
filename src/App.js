import React from "react";

import { Switch, Route } from "react-router-dom";

import AuthForm from "./Components/Authentication/authForm";
import Welcome from "./Components/Welcome/Welcome";
import Profile from "./Components/Profile/profile";
import Reset from "./Components/PasswordReset/Reset";


function App() {
  return (
    <main>
      <Switch>
        <Route path="/" exact>
          <AuthForm />
        </Route>

        <Route path="/auth">
          <AuthForm />
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>

        <Route path="/passwdreset">
          <Reset />
        </Route>

      </Switch>
      
    </main>
  );
}

export default App;
