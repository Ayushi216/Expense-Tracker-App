import React from "react";

import { Switch, Route } from "react-router-dom";

import AuthForm from "./Components/Authentication/authForm";
import Welcome from "./Components/Welcome/Welcome";
import Profile from "./Components/Profile/profile";


function App() {
  return (
    <main>
      <Switch>
        <Route path="/" exact>
          <AuthForm />
        </Route>

        <Route path="/welcome">
          <Welcome />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>

      </Switch>
      
    </main>
  );
}

export default App;
