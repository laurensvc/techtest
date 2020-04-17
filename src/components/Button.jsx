import styled from 'styled-components';

export const Button = styled.button`
  padding: 8px 16px;
  background: ${props => (props.tertiary ? 'transparent' : '#ffffff')};
  color: ${props => (props.tertiary ? '#ffffff' : '#202020')};
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  border: 1px solid ${props => (props.tertiary ? 'transparent' : '#ffffff')};
  transition: all 0.15s ease-in;
  cursor: pointer;

  &:hover {
    background: ${props => (props.tertiary ? '#303030' : '#CCCCCC')};
    border: 1px solid ${props => (props.tertiary ? 'transparent' : '#CCCCCC')};
  }
`;
