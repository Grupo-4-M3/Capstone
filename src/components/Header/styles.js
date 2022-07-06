import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 60px;
    background: #E9DAC1;
    border: 1px solid rgba(0, 0, 0, 0.49);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 0px 8px 8px;
    box-sizing: border-box;
    padding: 0 3rem;

    & h1 {
        width: 3rem;
        color: #54BAB9;
    }
    & h1 span{
        color: #448382;
    }
    & div{
        display: flex;
        justify-content: flex-end;
        gap: .8rem;
    }
    & h2{
        color: #448382;
    }
`