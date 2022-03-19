import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  height: 90%;
  max-height: 90%;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 12px;
  }
`;
