import styled from 'styled-components';

export const InputBox = styled.div`
 position: relative;
 width: 70%;
 height: 50px;
 border-bottom: 2px solid white;
 margin: 30px 0;
 color: white;

 span{
    position: absolute;
    right: 8px;
    font-size: 1.2em;
    line-height: 75px;

 }

`



export const InputText = styled.input`
   width: 82%;
    height: 130%;
    background: transparent;
    border: none;
    outline: none;
    color: white;
    font-weight: 600;
   
        

`

export const Label = styled.label`
    position: absolute;
    top: -2%;
    left: 5px;
    transform: translateY(-50%);
    font-size: 1em;
    font-weight: 500;
    pointer-events: none;
    transition: 3s;


`
export const ErrorMessageStyled = styled.p`
  text-align: center;
  margin-top: -10px;
  color: #fb103d;
  font-size: 14px;
`;

