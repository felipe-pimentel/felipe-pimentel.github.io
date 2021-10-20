import styled from 'styled-components';
import {
  StyledSection,
  SectionTitleWrapper,
  SectionTitle,
  SectionTitleSpan,
  SectionTitleSpanMobile,
  SectionContentWrapper
} from './Section';

export default function Contact() {
  return (
    <StyledSection>
      <SectionTitleWrapper>
        <SectionTitle>
          <SectionTitleSpanMobile>CONTATO <span>/</span> CONTACT</SectionTitleSpanMobile>
          <SectionTitleSpan>CONTATO <span>/</span></SectionTitleSpan>
          <SectionTitleSpan>CONTACT</SectionTitleSpan>
        </SectionTitle>
      </SectionTitleWrapper>
      <SectionContentWrapper>
      </SectionContentWrapper>
    </StyledSection>
  );
}
