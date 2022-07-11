import styled from "styled-components";

export const SectionList = styled.section`
border-radius: 13px;
box-shadow: 0 0 .2rem 0;

width: ${({size})=> size};
min-height: ${({sizeY})=> sizeY};
max-height: ${({maxSize})=> maxSize};
background-color: #F7ECDE;

    header{
        border-radius: 8px 8px 0 0;

        background-color: #54BAB9;
        height: 40px;
        
        display: flex;
        justify-content: center;
        align-items: center;
        
        h1{
            color: white;
            font-size: 1.6rem;
            font-weight: 700;
        }
    }

    ul{
        padding: .5rem;

        display: flex;
        flex-direction: column;
        gap: .7rem;

    }
`;