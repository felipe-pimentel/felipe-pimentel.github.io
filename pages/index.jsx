import styled from 'styled-components';
import { Icon } from '@iconify/react';
import About from '../components/About';
import Button from '../components/Button';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

const Title = styled.h1`
  font-size: 2.5rem;
  line-height: 2;
  text-align: center;
  color: ${ ({ theme }) => theme.colors.content() };
  height: 100vh;

  @media screen and (min-width: 37.5rem) {
    grid-column: span 3;
  }
`

const Main = styled.main`
  display: grid;
  width: clamp(20rem, 100%, 90rem);
  grid-template-rows: repeat(6, auto);
  margin: auto;
  position: relative;

  @media screen and (min-width: 37.5rem) {
    grid-template-columns: 2.5rem 15rem auto;
  }

  @media screen and (min-width: 60rem) {
    grid-template-columns: 2.5rem 18.75rem auto;
  }
`

export default function Home({ toggleTheme }) {
  return (
    <>
      <Main>
        <Button onClick={ () => toggleTheme() }>
          <span>FELIPE PIMENTEL</span>
          <Icon icon="mdi:close" />
        </Button>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Title>FOOTER</Title>
      </Main>
    </>
  );
}
