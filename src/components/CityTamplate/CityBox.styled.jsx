import styled from '@emotion/styled';
import { AiFillCloseCircle } from 'react-icons/ai';

export const CloseIcon = styled(AiFillCloseCircle)`
  position: absolute;
  top: 2px;
  right: 2px;
  width: 20px;
  height: 20px;
  transition: 300ms;
  :hover {
    fill: red;
  }
`;

export const CityBox = styled.div`
  position: relative;
  min-width: 25vw;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;

  @media screen and (max-width: 767px) {
    min-height: 30vh;
    width: 40vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 2.5vw;
  }

  margin: 1vw;
  padding: 2vw 3vw 2vw 3vw;

  box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.7);
  -webkit-box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.7);
  -moz-box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.7);
`;

export const MainBox = styled.div`
  height: 12vw;
  @media screen and (max-width: 767px) {
    height: 20vw;
    /* height: 200vw; */
  }
`;
export const StyledSpan = styled.span`
  color: #d02402;
`;
export const TextBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const IMG = styled.img`
  display: inline-block;
  width: 6vw;
  height: 6vw;
  @media screen and (max-width: 767px) {
    width: 12vw;
    height: 12vw;
  }
`;
export const CityBoxLayout = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  /* top: 15%;
  left: 8%;
  right: 8%;
  bottom: 8%; */
  top: 0%;
  left: 0%;
  right: 0%;
  bottom: 0%;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  span {
    color: white;
  }
`;
export const Title = styled.p`
  text-align: center;
  margin: 1vw 1vw;
`;
