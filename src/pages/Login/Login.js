import React, { useEffect } from "react";
import './Login.css';
import logo from '../../assets/uagrm.png';
import { useNavigate } from 'react-router-dom';


function Login() {
  const navigate = useNavigate();
  const onSubmit = event => {
    event.preventDefault()

    navigate('/inscription')
  }

  return (<div className="signup_container">
    <div className="signup_form_container">
      <div className="left">
        <img src={logo} alt="hola" style={{ width: '70%', height: 'auto' }} />
      </div>
      <div className="right" type="onSumit">
        <form className="form_container" onSubmit={onSubmit}>
          <h1>Datos para el acceso</h1>
          <h4>Código de Estudiante</h4>
          <input
            type="text"
            name="firstName"
            required
            className="input"
            pattern="\d{0,10}"
            maxLength="10"
            title="Ingrese su Nro de Registro" />
          <h4>Contraseña</h4>
          <input
            type="password"
            name="password"
            required
            className="input" />
          <button type="submit" className="blue_btn">
            Ingresar
          </button>
        </form>
      </div>
    </div>
  </div>);
}




export default Login;
