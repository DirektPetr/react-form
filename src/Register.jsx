import { useState } from 'react';

const Register = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(handleSubmit);
    console.log(email);
    console.log(pass);
    console.log(name);
  };

  return (
    <div className='auth-form-container'>
      <form className='register-form' onSubmit={handleSubmit}>
        <label htmlFor="name">Full name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="name"
          placeholder="Full name"
          id="name"
          name="name"
        />

        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Your email@yandex.ru"
          id="email"
          name="email"
        />

        <label htmlFor="password">Password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <button className='btn' type="submit">Log In</button>
      </form>
      <button className='link-btn' onClick={() => props.formSwitch('login')}>Already have an account? Login here.</button>
    </div>
  );
};

export default Register;
