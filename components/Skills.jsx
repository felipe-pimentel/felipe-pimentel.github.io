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
          <SectionTitleSpanMobile>HABILIDADES / SKILLS</SectionTitleSpanMobile>
          <SectionTitleSpan>HABILIDADES /</SectionTitleSpan>
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
