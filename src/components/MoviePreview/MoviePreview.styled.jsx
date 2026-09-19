import { Link } from "react-router-dom";
import styled from "styled-components";

export const Card = styled.li`
  width: 300px;
  height: 600px;
  border-radius: 20px;
`;

export const StyledLink = styled(Link)`
    display: flex;
    flex-direction: column;
    text-decoration: none;
`

export const Image = styled.img`
    width: 100%;
    border-radius: 20px;
`

export const MovieTitle = styled.h2`
    font-size: 20px;
    font-weight: 700;
    margin: 10px 0;
    color: #3b3b3b;
`

export const MovieTime = styled.p`
    font-size: 12px;
    margin: 10px 0;
    color: #747474;
`

export const MovieDesc = styled.p`
    font-size: 14px;
    font-family: 400px;
    color: #4b4b4b;
`