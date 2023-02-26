import React from "react";
import './Login.css';
import logo from '../../assets/uagrm.png';


const Login = () => {
  return (<div className="signup_container">
    <div className="signup_form_container">
      <div className="left" >
        <img src={logo} alt= "hola" style={{ width: '70%', height: 'auto' }} />
      </div>
      <div className="right">
        <form className="form_container">
          <h1>Datos para el acceso</h1>
          <h4>Código de Estudiante</h4>
          <input
            type="text"
            name="firstName"
            required
            className="input"
          />
          <h4>Contraseña</h4>
          <input
            type="password"
            name="password"
            required
            className="input"
          />
          <button type="submit" className="blue_btn">
            Ingresar
          </button>
        </form>
      </div>
    </div>
  </div>);
};

export default Login;
