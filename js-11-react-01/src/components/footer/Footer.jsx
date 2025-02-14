import "./footer.css";

const coloresVivos = {
    color: "green",
    backgroundColor: "yellow",
    fontSize: "30px",
    fonrFamiliy: "Arial"
};

const coloresNeutros = {
    color: "black",
    backgroundColor: "white",
    fontSize: "18px",
    fonrFamiliy: "Times New Roman"
}

//        { year, cohorte }
export const Footer = ( { year , cohorte:ch, inLove }  ) => {
    return (
      <div>
        <p style = {{color: "yellow", fontFamily:"Arial"}}>Footer de mi aplicación</p>
        <p className="año-corte">Año {year}, Cohorte {ch}</p>
        <p style = { inLove ? coloresVivos : coloresNeutros }>Feliz 14 de febrero</p>
      </div>
    );
  };