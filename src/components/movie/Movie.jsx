import styled from 'styled-components';

export const Movie = styled.article`
  width: 200px;
  margin: 8px 24px;
  cursor: pointer;
  transition: all 0.15s ease-in;
  position: relative;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0px 0px 0px 16px rgba(255, 255, 255, 0.05);

    &:after {
      content: 'Show details';
      background: linear-gradient(
        0deg,
        transparent 15%,
        rgba(0, 0, 0, 0.5) 20%,
        rgba(0, 0, 0, 0.8) 75%
      );
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 100;
      display: flex;
      justify-content: center;
      padding-top: 80px;
      vertical-align: center;
      ${props => props.removal && 'content: "Remove from my list"'};
    }
  }
`;
