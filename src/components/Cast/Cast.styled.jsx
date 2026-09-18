import styled from "styled-components";

export const CardCollection = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    justify-content: center;
    align-items: center;
`

export const Card = styled.li`
    display: flex;
    flex-direction: column;
    width: 138px;
    height: 260px;
    border-radius: 15px;
    box-shadow: 0 5px 5px 0 rgba(0,0,0,0.5); 
`

export const Image = styled.img`
    border-radius: 15px;
    width: 100%;
`

export const ActorInfo = styled.div`
    padding: 10px;
`

export const Name = styled.h3`
    font-size: 14px;
`

export const Character = styled.p`
    font-size: 12px;
`