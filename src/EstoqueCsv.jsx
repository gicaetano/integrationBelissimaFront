import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './EstoqueCsv.css'; // novo arquivo de estilo

function EstoqueCsv() {
  const [colunas, setColunas] = useState([]);
  const [dados, setDados] = useState([]);

  useEffect(() => {
    axios.get('/api/estoque-csv-local')
      .then(res => {
        setColunas(res.data.colunas);
        setDados(res.data.dados);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="estoque-container">
      <h1>Estoque CSV (formatado)</h1>
      <div className="tabela-container">
        <table className="tabela-estoque">
          <thead>
            <tr>
              {colunas.map((col, idx) => (
                <th key={idx}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dados.map((linha, idx) => (
              <tr key={idx}>
                {linha.map((col, i) => (
                  <td key={i} title={col}>{col}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EstoqueCsv;