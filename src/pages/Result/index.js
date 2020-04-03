import React, { useState, useEffect } from "react";
import "./style.css";
import { useLocation, useHistory, Link } from "react-router-dom";
import { Header } from "../../components/Header";

export const Result = () => {
  const location = useLocation();
  const [result, setResult] = useState();
  let history = useHistory();

  const renderResult = () => {
    if (!result) return null;

    return (
      <>
        {result.totalCaixas && (
          <div className="row">
            <h5>Total de caixas:</h5>
            <h1>{result.totalCaixas} cx</h1>
          </div>
        )}
        {result.totalQuadrado && (
          <div className="row">
            <h5>Total de pisos em metros quadrado:</h5>
            <h2>{result.totalQuadrado}m²</h2>
          </div>
        )}
        {result.totalObra && (
          <div className="row">
            <h5>Valor da obra:</h5>
            <h1>{result.totalObra}</h1>
          </div>
        )}
      </>
    );
  };

  useEffect(() => {
    //  console.log(location.pathname); // result: '/secondpage'
    //  console.log(location.search); // result: '?query=abc'
    //  console.log(location.state); // result: 'some_value'

    setResult(location.state);
  }, [location.state, result]);

  return (
    <>
      <Header />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-sm-12">
            <h1 className="page-title">Calculadora de piso online</h1>
            <div className="row justify-content-between">
              <form className="form-full">
                <div className="form-column">{renderResult()}</div>
                <div className="form-column">
                  <h4>Sobre o resultado</h4>
                  <p>Calculamos a quantidade de piso/caixas necessária com basia nas informações coletadas
                    arredondando os valores para cima. 
                    
                    Por tanto, não tome o valores resultantes como verdade absoluta. 
                    Considere apenas uma estimativa de gastos e material.
                  </p>
                  <p> 
                    A melhor pessoa para te ajudar nesse momento é o seu pedreiro/empreiteira. Entre em contato
                    com eles para melhores resultados
                  </p>
                  <p> Se o seu calculo retornou algum valor errado ou algum erro, por favor entrem em contato clicando <Link to='/contato'>aqui</Link></p> 
                  
                </div>
              </form>
            </div>
            <div className="row justify-content-center">
              <button type="button" className="btn btn-info" onClick={() => history.goBack()}>
                Recalcular
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
