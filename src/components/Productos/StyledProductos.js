import styled from 'styled-components';

export const ProductosContainer = styled.div`
  display: grid;
  place-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 400px);
  row-gap: 3.5rem;
  width: 100%;
  padding: 1rem 0;
`;

export const ProductosCard = styled.div`
  background: var(--gray-bg);
  width: 260px;
  height: auto;
  border-radius: 15px;
  padding: 1rem;
  img {
    width: 100%;
    height: 280px;
    margin-bottom: 1rem;
    border-radius: 10px 10px 0px 0px;
    border: 2px solid black;
  }
  h2 {
    font-weight: 400;
    margin: 0;
  }
  p {
    color: white;
    font-size: 1.2rem;
  }
  @media (max-width: 300px) {
    margin: 0%;
    width: 230px;
    height: auto;
    img {
    width: 100%;
    height: 280px;
    margin-bottom: 1rem;
    border-radius: 10px 10px 0px 0px;
    border: 2px solid black;
    margin: 0%;
    padding: 0%;

    }
 
  }
`;

export const ContainerPrice = styled.div`
  display: flex;
  justify-content: space-between;
  div{
    display: flex;
    flex-direction: column;
  }
`;

export const CardPrice = styled.span`
  font-weight: 700;
  font-size: 1.75rem;
  
`;

export const ButtonContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 3rem;
`;
