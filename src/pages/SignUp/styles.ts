import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import SignInBackground from '../../assets/sign-up-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;
  width: 100%;
  max-width: 700px;
`;

const appearFromRight = keyframes`
  from { 
    opacity: 0;
    transform: translateX(50px);
  }
  to{ 
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${appearFromRight} 1s;

  img {
    margin-top: 20px;
  }
  form {
    text-align: center;
    margin: 80px 0px;
    width: 340px;

    h1 {
      margin-bottom: 25px;
    }
    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: all 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }
  > a {
    color: #ff9000;
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: all 0.2s;
    padding-bottom: 10px;
    svg {
      margin-right: 5px;
    }
    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${SignInBackground}) no-repeat center;
  background-size: cover;
`;
