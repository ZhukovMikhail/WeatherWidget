import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;

  border-radius: 10px;
  margin-left: 21.8vw;
  /* justify-content: space-around; */
  @media screen and (max-width: 767px) {
    min-height: 60vh;
    align-items: center;
    margin-left: 0;
    padding-left: 5vw;
    padding-right: 5vw;
  }
`;
