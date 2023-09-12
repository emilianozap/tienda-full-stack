import styled from "styled-components";

export const ContainerHeroStyled = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;


`
export const ContainersSearchHero = styled.div`
height: 180px auto;
display: flex;
align-items: center;
justify-content: flex-end;
@media (max-width: 400px) {
    flex-direction: column;
    gap: 10px;
}



`
export const InputTextHero = styled.input`
   width: 82%;
    height: 130%;
    background: transparent;
    border: none;
    border-bottom: 2px solid white;
    outline: none;
    color: white;
    font-weight: 600;
    padding: 20px;
`
export const LabelHero = styled.label`
    position: absolute;
    top: -2%;
    left: 5px;
    transform: translateY(-50%);
    font-size: 1em;
    font-weight: 500;
    pointer-events: none;
    transition: 3s;


`
// slider


export const ContainersImagenHero = styled.div`
  width: 100% ;
  height: 580px ;
  margin:40px;
  


  @media (max-width: 500px ) {
    width: 100% ;
  height: 480px ;
  }

  @media (max-width: 500px ) {
    width: 100% ;
  height: 280px ;
  }
 

`
export const ContainerImg = styled.div`
  width: 100%;
  height:  550px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img{
    height: 100%;
    width: 80%;
    opacity: 0.5;
    border-radius: 20px;
    z-index: -1000;
    position: static;
  }
  h1{
    position: relative;
    text-align: center;
    bottom: 7cm;
    color: #FFC83D;
    border-right: 3px solid white;
    font-size: 2rem;
    animation: teclear 3s steps(16), efecto 1s step-end infinite;
  }
  
  @keyframes teclear {
      from{
        clip-path: polygon(0 0,0 0,0 100%, 0% 100%);
      }
      to{
        clip-path:polygon(0 0, 100% 0, 100% 100%, 0% 100%); ;
      }
    }
    @keyframes efecto{
      50%{
        border-color: transparent;
      }
    }



  @media (max-width: 500px) {
    height: 450px;
    
  }
`





