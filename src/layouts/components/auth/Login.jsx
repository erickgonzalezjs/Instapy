import "./login.css";
import {usuarios} from "../../../database/database";
import { useNavigate} from "react-router-dom";
import {eseNavigate} from'react'

const Login = () => {
  const [getUsername, setUsername] = useState("");
  const [getPassword, setPassword] = useState("");
  const busarUsuario = () => {
   let estado = usuarios.some((usuario)=>getUsername === usuario.user);
   return estado
  }
  }
  return (
    <form className="login-form">
      <h2>Login</h2>
      <div className="input-group">
        <label htmlFor="username">Username</label>
        <input
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          type="text"
          id="username"
          name="username"
        />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password</label>
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          id="password"
        />
      </div>
      <button onClick={iniciarSesion} type="button">
        Login
      </button>
    </form>
  );


export default Login;
