import styled from 'styled-components';
import {
  StyledSection,
  SectionTitleWrapper,
  SectionTitle,
  SectionTitleSpan,
  SectionTitleSpanMobile,
  SectionContentWrapper
} from './Section';

const AboutText = styled.p`
  color: ${ ({ theme }) => theme.colors.content(0.75) };
  font-size: 1rem;
  line-height: 1.35;
  max-width: 50ch;
  margin-bottom: 1.35rem;

  @media screen and (min-width: 37.5rem) {
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
  }
`;

export default function About() {
  return (
    <StyledSection>
      <SectionTitleWrapper>
        <SectionTitle>
          <SectionTitleSpanMobile>SOBRE / ABOUT</SectionTitleSpanMobile>
          <SectionTitleSpan>SOBRE /</SectionTitleSpan>
          <SectionTitleSpan>ABOUT</SectionTitleSpan>
        </SectionTitle>
      </SectionTitleWrapper>
      <SectionContentWrapper>
        <AboutText>Sou originalmente formado em Engenharia Civil pela UFRJ, atuei por um tempo na área, mas sempre fiquei incomodado com a falta de variedade e criatividade nos projetos em que trabalhei. Quando me vi fora do mercado e desmotivado a prosseguir nesse caminho, passei por um período em que eu busquei me conhecer e me aceitar melhor pra encontrar um novo caminho profissional que fosse mais relevante para mim.</AboutText>
        <AboutText>Eu sempre tive contato com tecnologia e conheço muitas pessoas que já trabalham nesse ramo há muito tempo. Então, quando surgiu a oportunidade de buscar uma formação em desenvolvimento web de uma maneira mais formal e organizada, eu resolvi arriscar. E pra surpresa do Felipe de uns anos atrás, que não gostava de programação durante a faculdade, eu me apaixonei pela área, principalmente a parte de front-end. Afinal, nesse tempo de reflexão, eu percebi o quanto eu gosto e admiro design de uma forma geral, e essa área permite que eu alivie essa &quot;coceirinha&quot; que existia em mim e que eu relutei tanto em aceitar.</AboutText>
        <AboutText>Então, o que eu busco hoje é evoluir como desenvolvedor, principalmente na parte front-end, e construir soluções que atendam as necessidades dos clientes e, principalmente, dos usuários, sempre de forma confiável e agradável.</AboutText>
      </SectionContentWrapper>
    </StyledSection>
  );
}
