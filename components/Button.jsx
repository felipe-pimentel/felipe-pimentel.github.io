import styled from 'styled-components';

const Button = styled.button`
  background: ${ ({ theme }) => theme.colors.accent() };
  border: none;
  box-sizing: border-box;
  display: flex;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  justify-content: space-around;
  align-items: center;
  font-size: 1.5rem;
  width: 100%;
  height: 4rem;
  position: sticky;
  top: 0;
  z-index: 999;

  span {
    color: ${ ({ theme }) => theme.colors.white() };
    font-size: 1.25rem;
    font-style: italic;
    font-weight: 700;
    line-height: 1;
  }

  path {
    fill: ${ ({ theme }) => theme.colors.white() };
  }

  @media screen and (min-width: 37.5rem) {
    grid-column: 2 / 3;
  }

  @media screen and (min-width: 60rem) {
    font-size: 2rem;

    span {
      font-size: 1.5rem;
    }
  }
`

module.exports = Button;
