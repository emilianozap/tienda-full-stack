import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledButton = styled(motion.button)`
  padding: 0.8rem 1.5rem;
  outline: none;
  border: none;
  border-radius: 10px;
  background: var(--red-bg);
  color: white;
  text-transform: uppercase;
  font-weight: bolder;
  cursor: pointer;

  &:hover {
    opacity: 95%;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

`;
