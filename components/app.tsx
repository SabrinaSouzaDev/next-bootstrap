import axios from "axios";
import * as React from 'react';
import {Row, Col} from 'react-bootstrap';
import { ChangeEvent, SetStateAction, useEffect, useState } from "react";
import "../src/styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

type IBGEUFResponse = {
  sigla: string;
  nome: string;
};
type IBGECITYResponse = {
  id: number;
  nome: string;
};



function App() {
  const [ufs, setUfs] = useState<IBGEUFResponse[]>([]);
  const [cities, setCities] = useState<IBGECITYResponse[]>([]);
  const [selectedUf, setSelectedUf] = useState("0");
  const [selectedCity, setSelectedCity] = useState("0");
  useEffect(() => {
    if (selectedUf === "0") {
      return;
    }
    axios
      .get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`
      )
      .then((response: { data: SetStateAction<IBGECITYResponse[]>; }) => {
        setCities(response.data);
      });
  });

  useEffect(() => {
    axios
      .get("https://servicodados.ibge.gov.br/api/v1/localidades/estados/")
      .then((response: { data: SetStateAction<IBGEUFResponse[]>; }) => {
        setUfs(response.data);
      });
  }, [selectedUf]);

  function handleSelectUf(event: ChangeEvent<HTMLSelectElement>) {
    const uf = event.target.value;
    setSelectedUf(uf);
  }

  function handleSelectCity(event: ChangeEvent<HTMLSelectElement>) {
    const city = event.target.value;
    setSelectedCity(city);
  }

  return (
    <>
      
      <div className="container">
        <select name="uf" id="uf" onChange={handleSelectUf}>
          <option value="0">Selecione uma UF</option>
          {ufs.map((uf) => (
            // eslint-disable-next-line react/jsx-key
            <option value={uf.sigla}>{uf.nome}</option>
          ))}
        </select>


        

        <select
          name="City"
          id="City"
          value={selectedCity}
          onChange={handleSelectCity}
        >
          <option value="0">Selecione uma cidade</option>
          {cities.map((city) => (
            <option key={city.id} value={city.nome}>
              {city.nome}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default App;