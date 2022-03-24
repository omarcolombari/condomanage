import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 25px 15px;
  width: 100%;
  height: 150px;
  gap: 20px;
  select,
  button,
  input,
  p {
    width: 100%;
    color: white;
  }
  button {
    margin-top: 8px;
    margin-bottom: 8px;
    background: #00a5ae;
    border-radius: 30px;
    padding: 10px;
    border: 1px solid #00a5ae;
  }
  input,
  select {
    height: 45px;
    box-sizing: border-box;
    font-size: 13.0293px;
    padding: 10px;
    transition: 0.5s;
    box-sizing: border-box;
    border-radius: 10px;
    background-color: #00a5ae;
    ::placeholder {
      color: white;
    }
  }

  label {
    font-size: 15px;
    color: white;
  }
`;
