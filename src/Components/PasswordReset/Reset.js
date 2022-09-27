import React, { Fragment, useRef } from "react";
import { useHistory } from 'react-router-dom';

const Reset = (props) => {

  const emailsInputRef = useRef();
  const history = useHistory();

  const loginHandler = (props) => {
    history.replace('/auth')
  }

  const resetPasswordHandler = (event) => {
    event.preventDefault();

    const enteredEmails = emailsInputRef.current.value;

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCm1BvBfb655cubTMVdda30otMpIuOclhk', {
      method: "POST",
      body: JSON.stringify({
        requestType: 'PASSWORD_RESET',
        email: enteredEmails,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Password reset not successful";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        console.log("Reset link has been sent to you email")
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  return (
    <Fragment>
      <form onSubmit={resetPasswordHandler}>
        <div>
          <label htmlFor="email">Enter the email you used to register</label>
          <input type="email" id="email" required ref={emailsInputRef} />
          <button>Reset password</button>

        </div>
        <button onClick={loginHandler}>Login again</button>

      </form>
    </Fragment>
  );
};

export default Reset;
