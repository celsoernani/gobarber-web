import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  align-items: center;
  background: #232129;
  width: 100%;
  color: #666360;
  border-radius: 18px;
  padding: 15px;
  border: 2px solid #232129;
  display: flex;
  flex-direction: row;
  & + div {
    margin-top: 10px;
  }
  input {
    flex: 1;
    border: 0;
    background: transparent;
    color: #f4ede8;
    &::placeholder {
      color: #666360;
    }
  }
  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}

  svg {
    margin-right: 15px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 15px;

  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
