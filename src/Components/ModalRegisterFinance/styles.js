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
    width: 90%;
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
    height: 40px;
    box-sizing: border-box;
    font-size: 13.0293px;
    padding: 10px;
    transition: 0.5s;
    border: 3px solid #c5e8fb;
    box-sizing: border-box;
    border-radius: 30px;
    background-color: #00a5ae;
    ::placeholder {
      color: white;
    }
  }

  label {
    font-size: 12.182px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: white;
  }
`;
