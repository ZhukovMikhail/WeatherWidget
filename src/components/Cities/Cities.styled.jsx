import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  /* height: 300px; */

  border-radius: 10px;
  justify-content: space-around;
  @media screen and (max-width: 767px) {
    min-height: 60vh;
    align-items: center;
  }
`;
