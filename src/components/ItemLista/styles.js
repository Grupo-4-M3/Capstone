import styled from "styled-components";

export const ItemList = styled.li`

border-radius: 13px;
background-color: #E9DAC1;

min-height: 2.5rem;
max-height: 6.8rem;
padding: .3rem;

display: flex;
justify-content: ${({typeCard})=> (
    typeCard === "horario"
    ?
    "center"
    :
    'space-between'
)};
align-items: center;
gap: .3rem;

    .div_img{
        padding: .3rem;

        width: 55px;
        min-height: 3rem;

        display: flex;
        justify-content: flex-start;
        align-items: center;

        img{
            
            background-color: #448382;
            overflow: hidden;

            border-radius: 500px;
            height: 55px;
            width: 55px;

        }
    }

    .div_infos{

        width: 78%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: .3rem;

        color: #448382;
        font-weight: 600;

        div{
            color: #333333;

            font-weight: 400;
            font-size: .8rem;

            text-align: start;
            text-overflow: ellipsis;        

            overflow: hidden;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            display: -webkit-box;
        }


    }
    
    h2{
        color: #333333;
    }

    .agendamento{
        color: #448382;
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: .5rem;
    }

    .div_nomePas{
        font-size: 15px;
    }

    .div_descData{
        color: #333333;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }

    .dataAgenda{
        font-size: 22px;
    }

    .hora{
        font-size: small;
        font-weight: 600;
        color: #828282;
    }

    .prontuario{
        color: #333333;
        width: 100%;
        
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: .1rem;

        font-weight: 400;
    }

    .pDescricao{
        font-size: small;

        text-align: start;
        text-overflow: ellipsis;        

        overflow: hidden;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        display: -webkit-box;

    }

    .divData{
        width: 100%;
        display: flex;
        justify-content: flex-end;
        padding-right: .1rem;

        color: #828282;

        font-size: 12px;
    }


`;