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
// img


export const ContainersImagenHero = styled.div`
  width: 100% ;
  margin-top: 10px ;
  width: auto;
 
  h1{
    text-align: center;
    font-weight: bolder;
    font-family: 'Kalam', cursive;
    color: var( --text-bg-red);
    font-size: 5rem;
    animation: teclear 3s steps(16);
    @media (max-width: 400px) {
      font-size: 3rem;
    }
  }
  
  @keyframes teclear {
      from{
        clip-path: polygon(0 0,0 0,0 100%, 0% 100%);
      }
      to{
        clip-path:polygon(0 0, 100% 0, 100% 100%, 0% 100%); ;
      }
    }


`
export const ContainerImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -85px;
  padding: 0%;
  height: auto;
  width: auto;
  @media (max-width: 500px ) {
      height: 260;
      width: 260;
      
    }

  img{
    position: relative;
   right: 20px;
    height: 60%;
    width: 60%;
    @media (max-width: 500px ) {
      height: 200;
      width: 200;
      right: 10px;
    }
  
  }


`





