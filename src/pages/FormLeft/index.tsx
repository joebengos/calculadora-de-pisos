import React, {useState} from 'react';
import './style.css';
import {Header} from '../../components/Header';
import {useHistory} from 'react-router-dom';

export const FormLeft: React.FC<{}> = () => {
  const [Warea, setWarea] = useState(''); // Area em m quadrados
  const [Harea, setHarea] = useState(''); // largura de um piso
  let history = useHistory();

  const handleCalc = () => {
    if (Warea.length === 0 || Harea.length === 0)
      alert('Preencha todos os campos!');
    const largura = parseFloat(Warea.replace(/,/g, '.'));
    const comprimento = parseFloat(Harea.replace(/,/g, '.'));
    const total = largura * comprimento;

    history.push({
      pathname: '/result',
      state: {totalQuadrado: total, totalCaixas: null, totalObra: null},
    });
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-sm-12">
            <h1 className="page-title">Calculadora de piso online</h1>
            <div className="row justify-content-between">
              <form className="form-left">
                <div className="input-group">
                  <label>Largura do ambiente em metros</label>
                  <input
                    type="text"
                    value={Warea}
                    onChange={event => {
                      setWarea(
                        event.target.value
                          .replace(/[a-z A-Z]/g, '')
                          .replace(/,/g, '.'),
                      );
                    }}
                  />
                </div>
                <div className="input-group">
                  <label>Comprimento do ambiente em metros</label>
                  <input
                    type="text"
                    value={Harea}
                    onChange={event => {
                      setHarea(
                        event.target.value
                          .replace(/[a-z A-Z]/g, '')
                          .replace(/,/g, '.'),
                      );
                    }}
                  />
                </div>
              </form>
              <div className="colum-text">
                <h4>Calculo por metro quadrado</h4>
                <p>
                  Pode ser muito chato ter que calcular algumas coisas na mão ou
                  de cabeça
                </p>
              </div>
            </div>
            <div className="row justify-content-center">
              <button
                type="button"
                className="btn btn-info"
                onClick={handleCalc}>
                Calcular
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
