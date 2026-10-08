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
  flex-direction: column;
  padding: 20px;
  min-height: 150px;
  border-radius: 30px;
  border: 2px solid #00000079;

  @media screen and (min-width: 480px) {
    flex-direction: row;
  }

  @media (prefers-color-scheme: dark) {
    border-color: #ffffff30;
  }
`;

export const ReviewAuthor = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  padding: 0 0 10px;
  margin: 0 0 10px;
  border-bottom: 2px solid #00000079;

  @media screen and (min-width: 480px) {
    border-bottom: none;
    border-right: 2px solid #00000079;
    flex-direction: column;
    padding-right: 10px;
    margin-right: 10px;
  }

  @media (prefers-color-scheme: dark) {
    border-color: #ffffff30;
  }
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

  @media (prefers-color-scheme: dark) {
    background-color: #616161;
  }
`;

export const Name = styled.h3`
  font-size: 18px;
`;
export const Username = styled.p`
  font-size: 14px;
  font-style: italic;
  color: #00000079;

  @media (prefers-color-scheme: dark) {
    color: #ffffff50;
  }
`;

export const PostDate = styled.p`
  font-size: 14px;
  font-style: italic;
`;

export const ReviewContent = styled.p`
  font-size: 16px;
`;
