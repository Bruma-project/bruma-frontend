import { LoginStyle } from "./Login.style";

export const Login = () => {
  return (
    <LoginStyle>
      <div className="card-container">
        <div id="backgroundimg"></div>
        <div id="logindiv">
          <div id="presentationsquare"></div>
          <h1 id="title1">Únete a la aventura</h1>
          <div id="dragonlogodiv">
            <img src="./iconDragon.png" alt="dragon logo" id="dragonlogo" />
          </div>
          <h1 id="title2">BRUMA PROJECT</h1>
          <h2 id="subtitle">Debes iniciar sesion para crear tu personaje</h2>
          <div id="loginsquare">
            <h2 id="logintitle">Iniciar sesión</h2>
            <p id="name" className="textinloginsquare">
              Nombre
            </p>
            <input id="form1" className="forms" type="text" name="user" placeholder="Ingrese el nombre de usuario" />
            <p id="password" className="textinloginsquare">
              Contraseña
            </p>
            <input id="form2" className="forms" type="password" name="pass" placeholder="Ingrese la contraseña" />
            <div id="remembers">
              <input id="check" type="checkbox" name="check" />
              <label id="remembercheck" htmlFor="check"></label>
              <p id="remember" className="textinloginsquare">
                Recuérdame
              </p>
            </div>
            <p id="forget" className="textinloginsquare">
              <a href="link to password recovery">¿Olvidaste tu contraseña?</a>
            </p>
          </div>
          <button id="log-in" className="textinloginsquare">
            Iniciar Sesión
          </button>
          <div id="subtext">
            <p id="subtext1" className="textinloginsquare">
              ¿No tienes cuenta?
            </p>
            <p>
              Crea tu propia cuenta <a href="#">aqui</a>
            </p>
          </div>
        </div>
      </div>
    </LoginStyle>
  );
};
