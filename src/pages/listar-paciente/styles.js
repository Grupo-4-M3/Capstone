import styled from "styled-components";

export const SecMain = styled.main`
*{
    box-sizing: border-box;
}

header{
    img{
        width: 3rem;
    }
}

background-color:  #FBF8F1;


width: 100%;
min-height: 100vh;

display: flex;
flex-direction: column;
align-items: center;
gap: 1.5rem;

    .alinhamento{

        background-color:  #FBF8F1;


        width: 100%;

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

        background-color: #F7ECDE;

        width: 90%;
        max-width: 350px;
        border-radius: 13px;
        box-shadow: 0 0 .2rem 0;
        padding-bottom: .6rem;

        display: flex;
        flex-direction: column;
        

        header{
            background-color: #54BAB9;
            color: white;

            border-radius: 13px 13px 0 0;
            height: 35px;

            display: flex;
            justify-content: center;
            align-items: center;
        }

        .formText{
            width: 100%;

            display: flex;
            flex-direction: column;
            align-items: center;
            gap: .6rem;

            textarea{
                width: 100%;

                padding: .7rem; 
            }
        }
    }

    @media(min-width: 767px){

        .alinhamento{
            flex-direction: row;
            justify-content: center;
            align-items: flex-start;

            padding-top: 2.5rem;
        }

        .container{
            width: 53%;
        }

        .agenda{
            max-width: 330px;
            margin-right: 2.2rem;
        }

        .formText{
            width: 100%;

            textarea{
                border-style: none;
                background-color: #FBF8F1;
                width: 100%;
                color: #333333;
            }
        }
    }
`;