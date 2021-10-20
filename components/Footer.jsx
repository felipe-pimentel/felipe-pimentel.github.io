import styled from 'styled-components';

const Footer = styled.footer`
  font-size: 2.5rem;
  line-height: 2;
  text-align: center;
  background-color: ${ ({ theme }) => theme.colors.content() };
  color: ${ ({ theme }) => theme.colors.background() };
  height: 15vh;

  @media screen and (min-width: 37.5rem) {
    grid-column: span 3;
  }
`
export default Footer;
