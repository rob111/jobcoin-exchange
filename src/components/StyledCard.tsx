import styled from 'styled-components';

const StyledCard = styled.article`
  border: 1px solid var(--primary-grey);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin: 15px 0 0 35px;

  .card-header {
    color: var(--primary-grey);
    border-bottom: 1px solid var(--primary-grey);
    width: 100%;
    text-align: center;
    font-size: 14px;
    font-weight: 700;
  }

  .card-body {

  }
`;

export default StyledCard;