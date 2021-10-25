import styled from 'styled-components';
import { Icon } from '@iconify/react';
import About from '../components/About';
import Button from '../components/Button';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Footer from '../components/Footer';

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

export default function Home({ toggleTheme, skillsList }) {
  return (
    <>
      <Main>
        <Button onClick={ () => toggleTheme() }>
          <span>FELIPE PIMENTEL</span>
          <Icon icon="mdi:close" />
        </Button>
        <Hero />
        <About />
        <Skills skillsList={ skillsList } />
        <Projects />
        <Contact />
        <Footer>FOOTER</Footer>
      </Main>
    </>
  );
}


export async function getStaticProps() {
  const skillsList = Object.entries(require('../skills'));
  return {
    props: {
      skillsList,
    }
  }
}
