import {
  BoxInfoUser,
  StyledNav,
  StyledNavCart,

} from "../navBar/StyledNavBar";

import logo from "../../assets/img/logo.png";
import { Cart } from "./CartIcon/Cart";
import { CartModal } from "./Cart/CartModal";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleMenu } from "../../redux/User/userSlice";
import { PiUserCircleMinusDuotone, PiUserCirclePlusDuotone } from "react-icons/pi";
import ModalUser from "./ModalUser/ModalUser";

export const NavBar = () => {
  const currentUser = useSelector(state => state.user.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <StyledNav>
      <CartModal></CartModal>
      <ModalUser></ModalUser>
      <div>
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>

      <StyledNavCart>
        <BoxInfoUser
          onClick={() =>
            currentUser ? dispatch(toggleMenu()) : navigate(`/registrarse`)
          }
        >
          <p>
            
              {currentUser ? `${currentUser.nombre}` : 'Iniciar'}
            
            </p>
          <span>{currentUser ? <PiUserCirclePlusDuotone /> : <PiUserCircleMinusDuotone />}</span>
        </BoxInfoUser>


        <div>
          <span>
            <Cart />
          </span>
        </div>
      </StyledNavCart>
    </StyledNav>
  );
};
