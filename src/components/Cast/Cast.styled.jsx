import styled from "styled-components";
import placeholder from '../../assets/image_placeholder.svg'

export const CardCollection = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: center;
  align-items: center;
  padding: 50px 0; 
`;

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  width: 138px;
  height: 260px;
  border-radius: 15px;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.5);
`;

export const Image = styled.div`
  border-radius: 15px;
  width: 138px;
  height: 175px;
  background-color: #dbdbdb;
  background-size: ${({ $path }) => ($path ? `cover` : `100px`)};
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${({ $path }) =>
    `url("https://media.themoviedb.org/t/p/w138_and_h175_face${$path}"), url("${placeholder}")`};
`;

export const ActorInfo = styled.div`
  padding: 10px;
`;

export const Name = styled.h3`
  font-size: 14px;
`;

export const Character = styled.p`
  font-size: 12px;
`;
