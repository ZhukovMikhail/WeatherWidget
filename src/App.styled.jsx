import styled from '@emotion/styled';
import BGimage from './images/1550818707_14.jpg';

export const Container = styled.div`
  background-image: url(${BGimage});
  h1 {
    color: white;
    text-align: center;
    width: 50vw;
    padding: 5px;
    margin: 0 auto;
    background-color: #d3d3d37f;
    border-radius: 10px;
    box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.7);
    -webkit-box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.7);
    -moz-box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.7);
  }
`;
