import styled from 'styled-components';

export const StyledSection = styled.section`
  display: grid;
  grid-column: 1 / -1;
  grid-template-columns: auto 1fr;
  margin: auto;
  min-height: 100vh;
  width: 100%;
  border-bottom: solid ${ ({ theme }) => theme.colors.content(0.1) } 0.125rem;

  :first-of-type {
    grid-row: 1 / 2;
  }

  @media screen and (min-width: 37.5rem) {
    grid-template-columns: 2.5rem 15rem auto;
  }

  @media screen and (min-width: 60rem) {
    grid-template-columns: 2.5rem 18.75rem auto;
  }
`;

export const SectionTitleWrapper = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  margin-top: 5rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: flex-end;
  border-right: solid ${({ theme }) => theme.colors.content() } 0.25rem;

  @media screen and (min-width: 37.5rem) {
    border-right: solid ${({ theme }) => theme.colors.content() } 0.5rem;
    grid-column: 2 / 3;
    margin-bottom: 2rem;
  }
`;

export const SectionTitle = styled.h2`
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  text-align: right;
  font-size: 2.75rem;
  line-height: 1;
  width: max-content;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 0.5rem;
  position: sticky;
  top: 5rem;
  height: max-content;

  @media screen and (min-width: 37.5rem) {
    font-size: 5rem;
    padding: 0 1rem;
  }

  span {
    font-family: 'Antonio', sans-serif;
  }
`;

export const SectionTitleSpanMobile = styled.span`
  letter-spacing: 0.15rem;

  @media screen and (min-width: 37.5rem) {
    display: none;
  }
`;

export const SectionTitleSpan = styled.span`
  display: none;

  @media screen and (min-width: 37.5rem) {
    display: initial;
  }
`;

export const SectionContentWrapper = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  margin: 5rem 1rem 1rem;
  ${ ({ center }) => center
    ? 'display: flex; flex-direction: column; justify-content: center; align-items: flex-start;' : '' }

  @media screen and (min-width: 37.5rem) {
    grid-column: 3 / 4;
    margin: 5rem 1rem 2rem 2rem;
  }
`;
