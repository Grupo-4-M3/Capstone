import styled from "styled-components";

export const SecMain = styled.main`

background-color:  #FBF8F1;


width: 100%;
height: 100vh;

display: flex;
flex-direction: column;
align-items: center;
gap: 1.5rem;

    .alinhamento{

        background-color:  #FBF8F1;


        width: 100%;
        height: 100vw;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
    }

    .container{
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .agenda{

        background-color: #FBF8F1;

        width: 90%;
        border-radius: 13px;
        box-shadow: 0 0 .2rem 0;
        padding-bottom: 1rem;       

        header{
            background-color: #54BAB9;
            color: white;

            border-radius: 13px 13px 0 0;
            height: 35px;

            display: flex;
            justify-content: center;
            align-items: center;
        }

        .calendario{
            width: 100%;

            display: flex;
            justify-content: center;
        }
    }

    @media(min-width: 767px){

        .alinhamento{
            flex-direction: row;
            justify-content: center;
            align-items: flex-start;

            padding-top: 3.5rem;
            height: 80vh;
        }
        
        .container{
            
            width: 59%;
            max-width: 600px;
        }

        .agenda{
            width: 35%;
            max-width: 390px;
        }
    }
`;