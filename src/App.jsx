import { useState } from 'react';
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import { useEffect } from 'react';
import Provincias from './components/Provincias';
import Municipios from './components/Municipios';

function App() {

  const URL = "https://opendata.euskadi.eus/contenidos/ds_recursos_turisticos/espacios_naturales_de_euskadi/opendata/espacios-naturales.json"
  
  const [espaciosNaturales, setEspaciosNaturales] = useState(null);
  const [municipios, setMunicipio] = useState(null);
  const provincias = ['Araba/Álava','Gipuzkoa','Bizkaia']

  useEffect(() => {
    fetch(URL)
      .then(async (response) => await response.json())
      .then((data) => setEspaciosNaturales(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);// Cuando carge la vista
  
  useEffect(() => {
    if (espaciosNaturales) {
      const uniqueProvincias = Array.from(
        new Set(espaciosNaturales.map((espacio) => espacio.locality))
      );

      setMunicipio(uniqueProvincias);
    }
  }, [espaciosNaturales]); 
  return (
    <>
      <Header name={'Urtzi'} surname={'Lusarreta'}/>
      <Main>
        <Provincias provincias={provincias}/>
        <Municipios municipios={municipios} entornosNaturales={espaciosNaturales}>
          <h1>Info</h1>
        </Municipios>
      </Main>
    </>
  )
}

export default App
