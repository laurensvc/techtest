import styled from 'styled-components';

export const Search = styled.input`
  width: 50%;
  display: block;
  margin: 32px auto;
  padding: 16px 24px;
  font-size: 24px;
  background: none;
  border-radius: 5px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  outline: none;
  color: #ffffff;

  &::placeholder {
    color: #bbbbbb;
  }
`;
