import styled from 'styled-components';

export const MovieList = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  padding-top: 32px;
  margin-bottom: 32px;
  overflow: auto;
  padding-bottom: ${props => (props.highlight ? 24 : 0)}px;
  background: ${props =>
    props.highlight ? 'rgba(255, 255, 255, 0.02)' : 'transparent'};
`;
