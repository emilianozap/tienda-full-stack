import styled from "styled-components";

export const StyledNav = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color:var(--red-bg);
  img {
    width: 60px;
    margin: 20px;
  }
`;

export const StyledNavLink = styled.div`
 ul{
    display: flex;
    justify-content: center;
    align-items: center;
 }

  li{
    margin: 20px;
  }
  a{
    color: var(--text-bg-red);
  }

  @media (max-width: 550px) {
    li{
        margin: 0px;
    }
   ul{
    display: none;
   }
   div{
    display: flex;
    
   
   }
   
  }
  


`;

export const StyledNavCart = styled.div`
 display: flex;
 margin-right: 20px;
 font-size: 25px;
 cursor: pointer;
`

export const BoxInfoUser = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-right: 20px;
p{
  font-size: 17px;
  font-weight: bolder;
  color: black;
  text-decoration: underline;
  text-transform: uppercase;
}

:hover{
  color: black;
}


`

