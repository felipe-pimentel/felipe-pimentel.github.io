import styled from 'styled-components';
import { Icon } from '@iconify/react';

const SkillsGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 3rem;
`;

const SkillsCategory = styled.h3`
  font-size: 2rem;
  line-height: 1.15;
  text-decoration: none;
  margin-bottom: 1.75rem;
  position: relative;

  &::after {
    position: absolute;
    bottom: -0.3rem;
    left: 0;
    content: '';
    background-color: ${ ({ theme }) => theme.colors.accent() };
    width: 5rem;
    height: 0.25rem;
  }

  @media screen and (min-width: 37.5rem) {
    font-size: 2.5rem;
    margin-bottom: 1.75rem;
  }
`;

const SkillCardsWrapper = styled.div`
  display: grid;
  gap: 0.75rem;
  grid-template-columns: repeat(auto-fit, 5rem);

  @media screen and (min-width: 37.5rem) {
    gap: 1rem;
  }
`;

const SkillCard = styled.div`
  width: 5rem;
  height: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 4rem;
  gap: 0.5rem;
`;

const SkillName = styled.span`
  color: ${ ({ theme }) => theme.colors.content(0.75) };
  font-size: 1rem;
  line-height: 1.35;
  text-align: center;

  @media screen and (min-width: 37.5rem) {
    font-size: 1rem;
  }
`;

const buildSkillCard = ([name, icon]) => (
  <SkillCard>
    <Icon icon={ icon } />
    <SkillName>{name}</SkillName>
  </SkillCard>
);

export default function SkillsList({ category, skills }) {
  return (
    <SkillsGroup>
      <SkillsCategory>{category}</SkillsCategory>
      <SkillCardsWrapper>
        { Object.entries(skills).map(skill => buildSkillCard(skill)) }
      </SkillCardsWrapper>
    </SkillsGroup>
  )
}
