import styled from "styled-components";

const Containe = styled.div`
  display: flex;
  justify-content: ${(props) => (props.center ? "space-around" : "normal")};
  align-items: ${(props) => (props.center ? "center" : "normal")};

  @media only screen and (max-width: 617px) {
    flex-direction: column;
  }
`;

export default Containe;
