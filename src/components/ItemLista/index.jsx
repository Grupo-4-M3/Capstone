import { ItemList } from "./styles";

export function ItemLista({
  onclick,
  typeCard = "pessoa",
  imgPessoa = "https://i.imgur.com/BKFDXpT.png",
  nome = "nome",
  descricao = "descrição",
  horario = "00:00h - 01:00h",
  descricaoProntuario = "descricaoProntuario",
  dataAgendamento = "30/05",
  data = "xx/xx/xxxx",
}) {
  const renderSwitch = (typeCard) => {
    switch (typeCard) {
      case "pessoa":
        return (
          <>
            <div className="div_img">
              <img src={imgPessoa} alt="Foto User" />
            </div>
            <div className="div_infos">
              <h3>{nome}</h3>
              <div>{descricao}</div>
            </div>
          </>
        );
      case "horario":
        return (
          <>
            <h2>{horario}</h2>
          </>
        );
      case "agendamento":
        return (
          <div className="agendamento">
            <div className="div_nomePas">
              <h3>Pas: {nome}</h3>
            </div>
            <div className="div_descData">
              <p className="dataAgenda">{dataAgendamento}</p>
              <p className="hora">{horario}</p>
            </div>
          </div>
        );
      case "prontuario":
        return (
          <>
            <div className="prontuario">
              <p>Psi: {nome}</p>
              <p className="pDescricao">{descricaoProntuario}</p>
              <div className="divData">
                <p className="data">{data}</p>
              </div>
            </div>
          </>
        );
      default:
        break;
    }
  };
  return (
    <ItemList onClick={onclick} typeCard={typeCard}>
      {renderSwitch(typeCard)}
    </ItemList>
  );
}
