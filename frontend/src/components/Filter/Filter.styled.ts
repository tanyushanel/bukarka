import styled from "styled-components";

export const FilterWrapper = styled.div`
  height: fit-content;
  min-width: 296px;

  & .price-range {
    display: flex;
    justify-content: space-between;
  }

  & .input-range {
    width: 120px;
  }

  & p {
    margin: 0.5rem;
  }

  & p label {
    padding: 1rem;
  }

  & .rating-range > div {
    display: flex;
    width: 156px;
    justify-content: space-between;
    align-items: end;
    gap: 1rem;
  }
`;

export const SectionTitle = styled.p`
  font-weight: 600;
  font-size: 1.5rem;
  top: -2.5rem;
  left: 0;
  position: absolute;
  color: var(--bukarka-deep-blue);
`;

export const FilterContent = styled.form`
  position: relative;
  text-align: left;
  padding: 1rem;
  background: var(--bukarka-light-grey);

  & section {
    padding-bottom: 1rem;
  }
`;

export const SubTitle = styled.p`
  font-weight: 700;
  padding-bottom: 1rem;
`;
