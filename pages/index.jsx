import styled from 'styled-components';

const Title = styled.h1`
  font-size: 2.5rem;
  line-height: 2;
  text-align: center;
  color: ${ ({ theme }) => theme.colors.content };
`

const Main = styled.main`
  display: grid;
  width: clamp(20rem, 100%, 80rem);
  grid-template-rows: repeat(6, auto);
`

export default function Home() {
  return (
    <>
      <Main>
        <Title>HERO</Title>
        <Title>ABOUT</Title>
        <Title>SKILLS</Title>
        <Title>PROJECTS</Title>
        <Title>CONTACT</Title>
        <Title>FOOTER</Title>
      </Main>
    </>
  );
}
