import styled from 'styled-components/native';

interface Props {
  margin?: number;
}

const Margin = styled.View<Props>`
  padding: ${({margin}) => margin || 8}px;
`;

export {Margin};
