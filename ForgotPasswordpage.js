import React, { useState } from 'react';
import './ForgotPasswordpage.css'

const ForgotPasswordpage = () => {
  const [username, setUsername] = useState('');
  const [selectedSecurityQuestion, setSelectedSecurityQuestion] = useState(null);
  const [securityAnswer, setSecurityAnswer] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();

  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username (Email or Username):</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
                               <label htmlFor="security-question">Security Question:</label>
     <label htmlFor='randomques'>What is your fav cartoon char?</label>



<label htmlFor="security-answer">Security Answer:</label>
<textarea
  id="security-answer"
  name="securityAnswer"
  placeholder="Enter your answer here"
  value={securityAnswer}
  onChange={(e) => setSecurityAnswer(e.target.value)}
  required
/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ForgotPasswordpage;
