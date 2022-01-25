import React from 'react';
import RegistrationForm from '../imports/RegistrationForm';
import BaseLogin from '../imports/BaseLogin';
export default function Registration() {
  return (
    <div id="login">
      <div className="container">
        <div className="row login-box">
          <BaseLogin/>
          <RegistrationForm/>
        </div>
      </div>
    </div>
  )
}
