import { formatPrice, formatDate } from '../../utils';

import {
  IdStyled,
  PedidoContainerStyled,
  PriceStyled,
  TextContainerStyled,
  TitleStyled,
} from './CardMisOrdenesStyles';

const CardMisOrdenes = ({ UpdatedAt, status, total, _id }) => {
  
 

  return (
    <PedidoContainerStyled>
      <TextContainerStyled>
        <TitleStyled>ID de la orden: #{_id.slice(0, 7)}</TitleStyled>
        <IdStyled>Fecha {formatDate(UpdatedAt)}</IdStyled>
        <PriceStyled>{formatPrice(total)}</PriceStyled>
      </TextContainerStyled>
    </PedidoContainerStyled>
  );
};

export default CardMisOrdenes;
