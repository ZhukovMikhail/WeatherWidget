import styled from '@emotion/styled';
import { Button } from '@mui/material';
export const ListItem = styled.div`
  display: flex;
  height: 40px;
  padding: 5px 30px 5px 30px;
  margin-top: 5px;
  background-color: hsla(0, 0%, 100%, 0.75);
  border-radius: 10px;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  transition: 300ms;
  div {
    width: 50vw;
  }
  &.active {
    background-color: #80b5ff;
    color: white;
  }
  box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.7);
  -webkit-box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.7);
  -moz-box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.7);
`;
export const StyledButton = styled(Button)`
  width: 15vw;
  height: 2vw;
  font-size: 1.5vw;
`;
