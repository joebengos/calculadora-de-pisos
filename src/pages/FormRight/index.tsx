import React, {useState} from 'react';
import './style.css';
import {useHistory} from 'react-router-dom';
import {Header} from '../../components/Header';

const parseFloat = Number.parseFloat;

export const FormRight = () => {
  const [area, setArea] = useState<string>(''); // Area em m quadrados
  const [Wpiso, setWPiso] = useState<string>(''); // largura de um piso
  const [Hpiso, setHpiso] = useState<string>(''); // altura de um piso
  const [pisoCx, setPisoCx] = useState<string>(''); // Quantidade de piso / caixa
  const [valoCx, setValorCx] = useState<string>(''); // valor de uma caixa
  const INTL: Intl.NumberFormat = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  const history = useHistory();

  /*
   * Total de caixas
   * total em m quadrados
   * valor
   */

  const calcCaixas = () => {
    const CMQuadradoPiso: number = parseFloat(Wpiso) * parseFloat(Hpiso);
    const CMQuadradoDaCaixa: number = CMQuadradoPiso * parseFloat(pisoCx);
    const totalCaixas: number = Math.round(
      parseFloat(area) / (CMQuadradoDaCaixa / 10000),
    );
    let totalObra = INTL.format(totalCaixas * Number(valoCx));

    history.push({
      pathname: '/result',
      state: {totalQuadrado: area, totalCaixas, totalObra},
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
              <form className="form-full">
                <div className="form-column">
                  <div className="input-group">
                    <label>Total em metros quadrados da área</label>
                    <input
                      type="text"
                      value={area}
                      onChange={(event) => {
                        setArea(
                          event.target.value
                            .replace(/[a-z A-Z]/g, '')
                            .replace(/,/g, '.'),
                        );
                      }}
                    />
                  </div>
                  <div className="input-group">
                    <label>Largura do piso em CM</label>
                    <input
                      type="text"
                      value={Wpiso}
                      onChange={(event) => {
                        setWPiso(
                          event.target.value
                            .replace(/[a-z A-Z]/g, '')
                            .replace(/,/g, '.'),
                        );
                      }}
                    />
                  </div>
                  <div className="input-group">
                    <label>Altura do piso em CM</label>
                    <input
                      type="text"
                      value={Hpiso}
                      onChange={(event) => {
                        setHpiso(
                          event.target.value
                            .replace(/[a-z A-Z]/g, '')
                            .replace(/,/g, '.'),
                        );
                      }}
                    />
                  </div>
                </div>
                <div className="form-column">
                  <div className="input-group">
                    <label>Quantidade de pisos por caixa</label>
                    <input
                      type="text"
                      value={pisoCx}
                      onChange={(event) => {
                        setPisoCx(
                          event.target.value
                            .replace(/[a-z A-Z]/g, '')
                            .replace(/,/g, '.'),
                        );
                      }}
                    />
                  </div>
                  <div className="input-group">
                    <label>Valor de 1 caixa</label>
                    <input
                      type="text"
                      value={valoCx}
                      onChange={(event) => {
                        setValorCx(
                          event.target.value
                            .replace(/[a-z A-Z]/g, '')
                            .replace(/,/g, '.'),
                        );
                      }}
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="row justify-content-center">
              <button
                type="button"
                className="btn btn-info"
                onClick={calcCaixas}>
                Calcular
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
