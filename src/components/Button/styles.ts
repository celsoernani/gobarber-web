import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #ff9000;
  width: 100%;
  border: 0;
  border-radius: 18px;
  padding: 0 15px;
  height: 56px;
  margin-top: 10px;
  color: #312e38;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;
