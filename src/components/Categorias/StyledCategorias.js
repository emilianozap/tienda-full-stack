import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CategoriasContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 50px;

  user-select: none;
`;

export const CardCategoria = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  
  width: 150px;
  padding: 5px;
  background-color: ${({ selected }) =>
    selected ?  'var(--gray-bg)' : 'var(--red-bg)' };
  border-radius: 15px;
  cursor: pointer;

  h2 {
    font-size: 1rem;
  }
  img{
    height: 35px;
  }

  :first-child {
    img {
      padding-top: 7px;
      padding-bottom: 7px;
    }
  }
  @media (max-width: 700px) {
    width: 60px;
    img{
        height: 40px;
    }
 
    h2{
        display: none;
    }
    
  }
`;

export const BorderDecoration = styled.div`
  height: 5px;
  width: 30%;
  background: var(--btn-gradient);
  border-radius: 15px;
`;
