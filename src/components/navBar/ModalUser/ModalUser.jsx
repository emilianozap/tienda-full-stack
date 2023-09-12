import { AnimatePresence } from "framer-motion";

import {
  HrStyled,
  LinkStyled,
  ModalContainerStyled,
  UserTypeStyled,
  UsernameStyled,
} from "./ModelUserStyles";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser, toggleMenu } from "../../../redux/User/userSlice";
import { ADMIN } from "../../../utils/constants";

const ModalUser = () => {
  const { currentUser, hiddenMenu } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <AnimatePresence>
      {!hiddenMenu && (
        <ModalContainerStyled
          initial={{ translateX: 600 }}
          animate={{ translateX: 0 }}
          exit={{ translateX: 600 }}
          transition={{ duration: 0.5 }}
          key="cart-user"
        >
          <UsernameStyled>{`Bienvenido "${currentUser?.nombre}"`}</UsernameStyled>

          <HrStyled />
          <UserTypeStyled>
            {currentUser?.rol === ADMIN ? (
              <>
                <LinkStyled to="/issue">Crear Issue</LinkStyled>

                <LinkStyled to="/mis-ordenes">Mis Ordenes</LinkStyled>
              </>
            ) : (
              <LinkStyled to="/mis-ordenes">Mis Ordenes</LinkStyled>
            )}
          </UserTypeStyled>
          <span
            onClick={() => {
              dispatch(setCurrentUser(null));
              dispatch(toggleMenu());
            }}
          >
            Cerrar Sesión
          </span>
        </ModalContainerStyled>
      )}
    </AnimatePresence>
  );
};

export default ModalUser;
