import styled from "styled-components";

const InfoCard = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  padding: 15px;
  border-radius: 15px;
  background-color: #dedede;

  @media (prefers-color-scheme: dark) {
    background-color: #454545;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export default InfoCard