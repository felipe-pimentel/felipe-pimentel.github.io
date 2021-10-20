import styled from 'styled-components';
import {
  StyledSection,
  SectionTitleWrapper,
  SectionTitle,
  SectionTitleSpan,
  SectionTitleSpanMobile,
  SectionContentWrapper
} from './Section';
import SkillsList from './SkillsList';

export default function Skills({ skillsList }) {
  return (
    <StyledSection>
      <SectionTitleWrapper>
        <SectionTitle>
          <SectionTitleSpanMobile>HABILIDADES <span>/</span> SKILLS</SectionTitleSpanMobile>
          <SectionTitleSpan>HABILIDADES <span>/</span></SectionTitleSpan>
          <SectionTitleSpan>SKILLS</SectionTitleSpan>
        </SectionTitle>
      </SectionTitleWrapper>
      <SectionContentWrapper>
        { skillsList.map(([category, skills]) => (
          <SkillsList
            key={ category }
            category={ category }
            skills={ skills }
          />
        )) }
      </SectionContentWrapper>
    </StyledSection>
  );
}
