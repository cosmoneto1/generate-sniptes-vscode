import styled from "styled-components";

const Button = styled.a`
  position: relative;
  padding: 10px;
  font-size: 17px;
  text-align: center;
  background: #26353e;
  color: rgb(253, 149, 31);
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  align-self: center;
  margin: 5px;
  text-decoration: none;

  &:hover {
    background: rgb(253, 149, 31) none repeat scroll 0% 0%;
    color: black;
  }
`;

export default Button;
