import styled from 'styled-components';

const Button = styled.button`
  background: ${ ({ theme }) => theme.colors.accent };
  border: solid ${ ({ theme }) => theme.colors.border } 0.25rem;
  border-radius: 0.5rem;
  box-sizing: border-box;
  color: ${ ({ theme }) => theme.colors.content };
  font-size: 1.5rem;
  line-height: 2rem;
  padding: 0 1.5em;
  width: max-content;
`

module.exports = Button;
