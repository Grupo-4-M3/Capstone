import styled from "styled-components";

export const SectionList = styled.section`
border-radius: 13px;
box-shadow: 0 0 .2rem 0;
padding-bottom: 10px;
width: ${({size})=> size};
max-width: ${({maxSizeWidth})=> maxSizeWidth};
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
        margin-bottom: 5px;
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
        overflow: auto;
        max-height: calc(${({maxSize})=> maxSize} - 4.3rem);

    }
`;