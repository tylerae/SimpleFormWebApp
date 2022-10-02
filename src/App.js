import React, {useState} from "react";
import "./index.css";

// App Class 
// initializes 3 objects used in the form.
export default function App()
 {
  const [values , setValues ] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  // Updates the value in the field with the user input
  const handleFirstNameInputChange = (event) => {
    setValues({...values, firstName: event.target.value})
  }

  // Updates the value in the field with the user input
  const handleLastNameInputChange = (event) => {
    setValues({...values, lastName: event.target.value})
  }

  // Updates the value in the field with the user input
  const handleEmailInputChange = (event) => {
    setValues({...values, email: event.target.value})
  }

  const [submitted, setSubmitted] = useState(false);

  // waits for event of user input within the field. Empty field will not allow for submit
  const handleSubmit = (event ) => {
    event.preventDefault();
    setSubmitted(true);
  }



  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
        {/* Sends message when form is submitted. */}
        {submitted ? <div className="success-message">Success! Your information has been submitted.</div> : null}

        {/* input field  */}
        <input
          value = {values.firstName}
          onChange={handleFirstNameInputChange}
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />

        {/* only a valid (not null) entry is excepted  */}
        {submitted && !values.firstName ? <span>Please enter valid first name</span> : null}

        {/* input field  */}
        <input
          value = {values.lastName}
          onChange={handleLastNameInputChange}
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />

        {/* only a valid (not null) entry is excepted  */}
        {submitted && !values.lastName ? <span>Please enter valid last name</span> : null}
        
        {/* input field  */}
        <input
          value = {values.email}
          onChange={handleEmailInputChange}
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />

        {/* only a valid (not null) entry is excepted  */}
        {submitted && !values.email ? <span>Please enter valid email</span> : null}
        
        {/* simple button for submission */}
        <button class="form-field" type="submit">
          Submit to Tyler
        </button>
      </form>
    </div>
  );
}
