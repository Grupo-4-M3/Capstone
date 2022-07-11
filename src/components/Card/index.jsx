import { StyledSection } from "./styles";
import pp from "../../assets/IMAGEM.svg";

function Card({ pessoa, sizeX, maxSizeX, maxSizeY, sizeY, type }) {
  return (
    <StyledSection
      sizeX={sizeX}
      maxSizeX={maxSizeX}
      sizeY={sizeY}
      maxSizeY={maxSizeY}
    >
      <div className="name-img">
        <figure>
          <img src={pessoa?.img ? pessoa?.img : pp} alt="" />
        </figure>

        <div>
          <h3>{pessoa?.name}</h3>
        </div>
      </div>

      <div>
        <h3>{type === "psicologo" ? pessoa?.emphasis : pessoa?.complaint}</h3>
      </div>
      <div className="more-info">
        <div>
          <h3>Mais informações</h3>
          <ul>
            {type === "psicologo" ? (
              <>
                <li>
                  {pessoa?.experience ? (
                    `Experiência: ${pessoa?.experience}`
                  ) : (
                    <></>
                  )}
                </li>
                <li>
                  {pessoa?.schedules ? (
                    `Horário de trabalho: ${pessoa?.schedules}`
                  ) : (
                    <></>
                  )}
                </li>
                <li>
                  {pessoa?.working_days ? (
                    `Dias de trabalho: ${pessoa?.working_days}`
                  ) : (
                    <></>
                  )}
                </li>
              </>
            ) : (
              <>
                <li>{pessoa?.age ? `Idade: ${pessoa?.age}` : <></>}</li>
                <li>
                  {pessoa?.status ? `Status civil: ${pessoa?.status}` : <></>}
                </li>
                <li>
                  {pessoa?.schooling ? (
                    `Escolaridade: ${pessoa?.schooling}`
                  ) : (
                    <></>
                  )}
                </li>
                <li>
                  {pessoa?.profession ? (
                    `Profissão: ${pessoa?.profession}`
                  ) : (
                    <></>
                  )}
                </li>
                <li>
                  {pessoa?.disease ? `Doenças: ${pessoa?.disease}` : <></>}
                </li>
                <li>
                  {pessoa?.medication ? (
                    `Remédios: ${pessoa?.medication}`
                  ) : (
                    <></>
                  )}
                </li>
              </>
            )}
          </ul>
        </div>

        {type === "paciente" ? (
          <div>
            <h3>Histórico de atendimentos</h3>
            {pessoa?.medical_records ? (
              <ul>
                {pessoa?.medical_records?.map((consulta, index) => (
                  <li key={index}>
                    <details>
                      <summary>
                        {consulta.date} - {consulta.psychologist}
                      </summary>
                      {consulta.description}
                    </details>
                  </li>
                ))}
              </ul>
            ) : (
              <span>Esse paciente não possui histórico.</span>
            )}
          </div>
        ) : (
          <></>
        )}
      </div>
    </StyledSection>
  );
}

export default Card;
