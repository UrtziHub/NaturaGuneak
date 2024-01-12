import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Provincias from "./components/Provincias";
import Municipios from "./components/Municipios";
import Informacion from "./components/Informacion";

function App() {
  const URL =
    "https://opendata.euskadi.eus/contenidos/ds_recursos_turisticos/espacios_naturales_de_euskadi/opendata/espacios-naturales.json";

  //const [provincia, setProvincia] = useState(null);
  const [municipios, setMunicipios] = useState(null);
  const [entornos, setEntornos] = useState(null);
  const [data, setData] = useState(null);

  const handleProvincia = (provincia) => {
    //setProvincia(provincia);
    const municipiosUnique = new Set();
    fetch(URL)
      .then(async (response) => await response.json())
      .then((data) => {
        for (const espacio of data) {
          if (espacio.territory.includes(provincia) && espacio.locality != "") {
            municipiosUnique.add(espacio.locality);
          }
        }
        setMunicipios(Array.from(municipiosUnique));
      });
  };
  const handleMunicipio = (municipio) => {
    const entornosUnique = new Set();
    fetch(URL)
      .then(async (response) => await response.json())
      .then((data) => {
        for (const espacio of data) {
          if (espacio.locality.includes(municipio) && espacio.locality != "") {
            entornosUnique.add(espacio.documentName);
          }
        }
        setEntornos(Array.from(entornosUnique));
      });
  };

  const handleEntornos = (entorno) => {
    console.log(entorno);
    const datos = { 
      nombre: '',
      localidad: '',
      tipo: '',
      turismo: '',
      descripcion: ''}
    fetch(URL)
      .then(async (response) => await response.json())
      .then((data) => {
        for (const espacio of data) {
          if (espacio.documentName === entorno) {
            datos.nombre = espacio.documentName;
            datos.localidad = espacio.locality;
            datos.tipo = espacio.templateType;
            datos.turismo = espacio.friendlyUrl;
            datos.descripcion = espacio.turismDescription;
          }
        }
        setData(datos);
      });
  };

  return (
    <>
      <Header name={"Urtzi"} surname={"Lusarreta"} />
      <Main>
        <Provincias
          provincias={["Araba/Álava", "Gipuzkoa", "Bizkaia"]}
          onSelectProvincias={(provincia) => handleProvincia(provincia)}
        />
        <Municipios
          municipios={municipios}
          entornosNaturales={entornos}
          onSelectMunicipios={(municipio) => handleMunicipio(municipio)}
          onSelectEntornos={(entorno) => handleEntornos(entorno)}
        >
          <Informacion 
            data={data}
          />
        </Municipios>
      </Main>
    </>
  );
}

export default App;
