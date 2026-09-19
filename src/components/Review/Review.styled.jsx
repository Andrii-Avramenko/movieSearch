import styled from "styled-components";
import placeholder from "../../assets/image_placeholder.svg";

export const ReviewsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
`;

export const ReviewCard = styled.div`
  display: flex;
  padding: 20px;
  min-height: 150px;
  border-radius: 30px;
  border: 2px solid #00000079;
`;

export const ReviewAuthor = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-right: 10px;
  margin-right: 10px;
  border-right: 2px solid #00000079;
`;

export const AuthorImage = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 15px;
  background-color: #dbdbdb;
  background-size: ${({ $path }) => ($path ? `cover` : `100px`)};
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${({ $path }) =>
    `url("https://image.tmdb.org/t/p/original${$path}"), url("${placeholder}")`};
`;

export const Name = styled.h3`
    font-size: 18px;
`
export const Username = styled.p`
    font-size: 14px;
    font-style: italic;
    color: #00000079;
`

export const PostDate = styled.p`
    font-size: 14px;
    font-style: italic;
`

export const ReviewContent = styled.p`
  font-size: 16px;
`;
