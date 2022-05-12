import styled from 'styled-components';

/* eslint-disable-next-line */
export interface GlobalStylesProps {}

const StyledGlobalStyles = styled.div`
  color: pink;
`;

export function GlobalStyles(props: GlobalStylesProps) {
  return (
    <StyledGlobalStyles>
      <h1>Welcome to GlobalStyles!</h1>
    </StyledGlobalStyles>
  );
}

export default GlobalStyles;
