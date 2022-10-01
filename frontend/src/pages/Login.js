import { useState } from 'react';
import { useNavigate } from "react-router-dom"
import '../assets/css/globale.scss';
import logo from '../assets/logo/icon-left-font-monochrome-white.png';
import Header from '../components/Header';
import User from '../services/user.services';
function Login() {

  const [values, setValues] = useState([]);
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState([]);
  const navigate = useNavigate();
  const handleChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  }

  const handleSubmit = () => {

    User.login(values)
      .then((val) => {
        setSuccess("Connexion réussi")
        localStorage.setItem('userId', val.data.userId)
        localStorage.setItem('token', val.data.token)
        localStorage.setItem('role', val.data.role)
        navigate('/');
      })
      .catch((err) => {
        setError(err.response.data)
        console.log(err.response.data)
      })

  }

  return (
    <div className="App">

      <Header />

      <div className='form'>
        <h2>Se connecter</h2>
        <label className='error'>{error}</label>
        <div className='inputgroup'>
          <label>Nom d'utilisateur</label>
          <input type="email" name="email" onChange={handleChange}></input>
        </div>
        <div className='inputgroup'>
          <label>Mot de passe</label>
          <input type="password" name="password" onChange={handleChange}></input>
        </div>
        <div className='inputgroup'>
          <button onClick={handleSubmit}>Login</button>
        </div>
      </div>

      <footer>
        <img src={logo} />
      </footer>

    </div>
  );
}

export default Login;