import { Routes as ReactDomRoutes, Route } from "react-router-dom";
import { Home } from "../Pages/Home/Home";
import { Login } from "../Pages/Login/Login";
import { Register } from "../Pages/register/Register";
import { RegistroCompletado } from "../Pages/RegistroCompletado/RegistroCompletado";
import { PageNotFound } from "../Pages/PageNotFound/PageNotFound";
import { FinalizarCompra } from "../Pages/checkout/checkout";
import { ProtectedRoute } from "../components/ProtectedRoute/ProtectedRoute";
import { Verify } from "../Pages/verify/Verify";
import { RecuperarPassword } from "../Pages/RecuperarPassword/RecuperarPassword";
import { Password } from "../Pages/password/Password";
import { Felicitaciones } from "../Pages/Felicitaciones/Felicitaciones";
import { MisOrdenes } from "../Pages/MisOrdenes/MisOrdenes";
import { Issue } from "../Pages/Issue/Issue";

function Routes() {
  return (
    <ReactDomRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registrarse" element={<Register />} />
      <Route path="/verificar" element={<Verify />} />
      <Route path="/registrado" element={<RegistroCompletado />} />
      <Route path="*" element={<PageNotFound />} />
      <Route
        path="/recuperar"
        element={<RecuperarPassword></RecuperarPassword>}
      ></Route>
      <Route path="/password" element={<Password></Password>}></Route>
      <Route path="/password" element={<Password></Password>}></Route>
      <Route
        path="/felicitaciones"
        element={<Felicitaciones></Felicitaciones>}
      ></Route>
      <Route path="/mis-ordenes" element={<MisOrdenes />} />
      <Route path="/issue" element={<Issue></Issue>} />

      <Route
        path="/pagar"
        element={
          <ProtectedRoute redirectTo={"/registrarse"}>
            <FinalizarCompra />
          </ProtectedRoute>
        }
      />
    </ReactDomRoutes>
  );
}

export default Routes;
