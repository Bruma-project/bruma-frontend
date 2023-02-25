import { Error404Style } from "./Error404.style";
import { Link } from "react-router-dom";

export const Error404 = () => {
  return (
    <Error404Style>
      <div className="content">
        <main className="elementos">
          <h1>404</h1>
          <h2>¡OPPS! PÁGINA NO ENCONTRADA!</h2>
          <section>
            <p>[ERROR 404] LO SENTIMOS, EL ARTÍCULO NO HA SIDO ENCONTRADO</p>
          </section>
          <section>
            <Link to="/">
              <button>
                <span>VOLVER AL INICIO</span>
              </button>
            </Link>
          </section>
        </main>
      </div>
    </Error404Style>
  );
};
