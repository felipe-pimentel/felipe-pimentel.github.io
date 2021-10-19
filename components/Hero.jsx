import styled from 'styled-components';
import {
  StyledSection,
  SectionTitleWrapper,
  SectionTitle,
  SectionTitleSpan,
  SectionTitleSpanMobile,
  SectionContentWrapper
} from './Section';

const HeroTitle = styled.h3`
  font-size: 2rem;
  line-height: 1.15;
  text-decoration: none;
  margin-bottom: 1.5rem;
  max-width: 40ch;

  @media screen and (min-width: 37.5rem) {
    font-size: 2.5rem;
    margin-bottom: 1.75rem;
  }
`;

const HeroText = styled.p`
  color: ${ ({ theme }) => theme.colors.content(0.75) };
  font-size: 1.25rem;
  line-height: 1.35;
  max-width: 50ch;

  @media screen and (min-width: 37.5rem) {
    font-size: 1.5rem;
  }
`;

export default function Hero() {
  return (
    <StyledSection>
      <SectionTitleWrapper>
        <SectionTitle>
          <SectionTitleSpanMobile>FULL STACK WEB DEV</SectionTitleSpanMobile>
          <SectionTitleSpan>FULL STACK</SectionTitleSpan>
          <SectionTitleSpan>WEB DEV</SectionTitleSpan>
        </SectionTitle>
      </SectionTitleWrapper>
      <SectionContentWrapper center>
        <HeroTitle><p>Não é apenas sobre código.</p><p>É sobre encontrar a solução que você merece.</p></HeroTitle>
        <HeroText>Olá! Meu nome é Felipe Pimentel e eu sou um desenvolvedor web full stack júnior do Rio de Janeiro.</HeroText>
      </SectionContentWrapper>
    </StyledSection>
  );
}
