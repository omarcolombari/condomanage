import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  border: 1px solid black;
  border-radius: 4px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  border-left: ${(props) =>
    props.status === "Entrada" ? "4px solid green" : "4px solid red"};

  h1 {
    font-size: 18px;
    font-weight: bold;
  }

  span,
  p {
    font-size: 16px;
  }
  :hover {
    background: #c5e8fb;
    cursor: pointer;
  }
`;

export const Box = styled.div``;
