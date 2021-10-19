import styled from 'styled-components';

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
