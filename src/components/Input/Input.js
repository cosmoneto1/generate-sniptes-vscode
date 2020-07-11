import styled from "styled-components";

const Input = styled.input`
  margin-right: ${(props) => (props.mr ? "10px" : "0px")};
  margin-bottom: 10px;
  background: rgb(25, 24, 31) none repeat scroll 0% 0%;
  border: 2px solid rgb(37, 36, 44);
  color: rgb(255, 255, 255);
  outline: currentcolor none 0px;
  border-radius: 5px;
  font-size: 17px;
  height: 50px;
  padding: 10px;
  flex: 1;

  @media only screen and (max-width: 617px) {
    margin-right: 0px;
  }
`;

export default Input;
