import styled from 'styled-components';
import {
  StyledSection,
  SectionTitleWrapper,
  SectionTitle,
  SectionTitleSpan,
  SectionTitleSpanMobile,
  SectionContentWrapper
} from './Section';

export default function Projects() {
  return (
    <StyledSection>
      <SectionTitleWrapper>
        <SectionTitle>
          <SectionTitleSpanMobile>PROJETOS <span>/</span> PROJECTS</SectionTitleSpanMobile>
          <SectionTitleSpan>PROJETOS <span>/</span></SectionTitleSpan>
          <SectionTitleSpan>PROJECTS</SectionTitleSpan>
        </SectionTitle>
      </SectionTitleWrapper>
      <SectionContentWrapper>
      </SectionContentWrapper>
    </StyledSection>
  );
}
