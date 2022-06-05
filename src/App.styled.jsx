import styled from '@emotion/styled';
import BGimage from './images/1550818707_14.jpg';

export const Container = styled.div`
  color: #0c1475;
  background-image: url(${BGimage});

  padding: 10px;
  font-size: 1.5vw;

  h1 {
    text-align: center;
    width: 50vw;
    padding: 10px;
    margin: 0 auto;

    background-color: rgba(211, 211, 211, 0.75);
    border-radius: 10px;
    box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.7);
    -webkit-box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.7);
    -moz-box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.7);
  }
  @media screen and (max-width: 767px) {
    height: 100vh;
    font-size: 2vw;
  }
`;
