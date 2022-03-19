import styled from "styled-components";

export const Box = styled.div`
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 779.73px;
  margin: 0 auto;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  gap: 20px;
`;

export const StyledHeader = styled.header`
  display: flex;
  width: 90%;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  h1 {
    font-size: 20px;
    font-weight: 600;
    color: #141155;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 25px 15px;
  width: 100%;
  height: 100px;
  gap: 20px;
  select,
  button,
  input {
    width: 90%;
  }
  button {
    margin-top: 8px;
    margin-bottom: 8px;
    background: #00a5ae;
    border-radius: 30px;
    color: white;
    padding: 10px;
    border: 1px solid #00a5ae;
  }
  input,
  select {
    height: 40px;
    box-sizing: border-box;
    font-size: 13.0293px;
    padding: 10px;
    transition: 0.5s;
    border: 3px solid #c5e8fb;
    box-sizing: border-box;
    border-radius: 30px;
    background-color: #00a5ae;
    color: white;
    ::placeholder {
      color: white;
    }
  }

  label {
    font-size: 12.182px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export const BoxButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;
