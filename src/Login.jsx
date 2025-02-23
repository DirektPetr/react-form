import { useState } from 'react';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(handleSubmit);
    console.log(email);
    console.log(pass);
  };

  return (
    <div className='auth-form-container'>
      <h2>Login</h2>
      <form className='login-form' onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={((e) => setEmail(e.target.value))}
          type="email"
          placeholder="Your email@yandex.ru"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={pass}
          onChange={((e) => setPass(e.target.value))}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <button className='btn' type="submit">Log In</button>
      </form>
      <button className='link-btn' onClick={() => props.formSwitch('register')}>Don't have an account? Register here.</button>
    </div>
  );
};

export default Login;
