import styled from "styled-components";

export const ContainersRecomendadosStyled = styled.div`
  height: auto;
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem 1rem;
  box-sizing: border-box ;
  
`

export const ContainerProductoStyled = styled.div`
  height: 200px;
  width: 500px ;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;
  background-color: var(--gray-bg);
    img{
        width: 180px;
        height: 90%;
        border: 2px solid black;
        border-radius: 15px;
        margin: 12px;
    }
    h1{
      margin: 0%;
      
    }
  

  @media (max-width: 504px) {
    flex-direction: column;
    background: var(--gray-bg);
    width: 260px;
    height: auto;
    padding: 1rem;
    img {
    width: 100%;
    height: 280px;
    margin-bottom: 1rem;
    border-radius: 10px 10px 0px 0px;
    border: 2px solid black;
    margin: 0%;

    }
    h2 {
    font-weight: 400;
    margin: 0;
    }
    p {
    color: white;
    font-size: 1.2rem;
  }

  }
  
  @media (max-width: 300px) {
    margin: 0%;
    width: 230px;
    height: 430px;
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

`

export const InfoCard = styled.div`
padding: 20px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;




`



export const InfoPrecio = styled.div`
  display: flex;
  
  div{
    display: flex;
    flex-direction: column;
    margin: 0px 20px;
    @media (max-width: 504px) {
      margin: 0px 31px;


    }
    @media (max-width: 504px) {
      margin: 0px 22px;
      @media (max-width: 300px) {
        margin: 0px 16px;

      }
  }
  }
  span{
    font-weight: 700;
    font-size: 1.75rem;
  }
`;
