import styled from 'styled-components';

const StyledCard = styled.article`
  border: 1px solid var(--black);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  background: var(--white);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  .card-header {
    color: var(--font-grey);
    border-bottom: 1px solid var(--primary-grey);
    width: 100%;
    text-align: center;
    font-size: 14px;
    font-weight: 700;
  }
`;

export default StyledCard;