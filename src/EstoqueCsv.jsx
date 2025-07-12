import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
    <div>
      <h1>Estoque CSV (formatado)</h1>
      <table border="1" cellPadding={6} style={{ width: '100%', fontSize: '14px' }}>
        <thead>
          <tr>
            {colunas.map((col, idx) => <th key={idx}>{col}</th>)}
          </tr>
        </thead>
        <tbody>
          {dados.map((linha, idx) => (
            <tr key={idx}>
              {linha.map((col, i) => <td key={i}>{col}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EstoqueCsv;