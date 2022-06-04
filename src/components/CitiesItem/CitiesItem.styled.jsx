import styled from '@emotion/styled';
export const ListItem = styled.div`
  display: flex;
  height: 40px;
  padding: 5px;
  margin-top: 5px;
  background-color: hsla(0, 0%, 100%, 0.75);
  border-radius: 10px;
  justify-content: space-around;
  margin-top: 10px;
  transition: 300ms;
  &.active {
    background-color: #80b5ff;
    color: white;
  }
  box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.7);
  -webkit-box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.7);
  -moz-box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.7);
`;
