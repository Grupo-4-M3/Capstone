import styled from "styled-components";

export const SecMain = styled.main`

background-color:  #FBF8F1;


width: 100%;
<<<<<<< HEAD
min-height: 100vh;
=======
height: 100vh;
>>>>>>> origin/fix_Header

display: flex;
flex-direction: column;
align-items: center;
gap: 1.5rem;

    .alinhamento{

        background-color:  #FBF8F1;


        width: 100%;
<<<<<<< HEAD
=======
        height: 100vw;
>>>>>>> origin/fix_Header

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
<<<<<<< HEAD
        max-width: 350px;
        border-radius: 13px;
        box-shadow: 0 0 .2rem 0;
        padding-bottom: 1rem;
=======
        border-radius: 13px;
        box-shadow: 0 0 .2rem 0;
        padding-bottom: 1rem;       
>>>>>>> origin/fix_Header

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
<<<<<<< HEAD
=======
            height: 80vh;
>>>>>>> origin/fix_Header
        }
        
        .container{
            
            width: 59%;
            max-width: 600px;
        }

        .agenda{
            width: 35%;
<<<<<<< HEAD
            max-width: 350px;
=======
            max-width: 390px;
>>>>>>> origin/fix_Header
        }
    }
`;