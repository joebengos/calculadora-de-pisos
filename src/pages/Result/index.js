import React from "react";
import "./style.css";
import { Header } from "../../components/Header";
export const Result = () => {


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
                  <div className="row">
                    <h5>Total de caixar:</h5>
                    <h2>30 cx</h2>
                  </div>
                  <div className="row">
                    <h5>Total de pisos em metros quadrado:</h5>
                    <h2>30 cx</h2>
                  </div>
                  <div className="row">
                    <h5>Valor da obra:</h5>
                    <h1>30 cx</h1>
                  </div>
                </div>
                <div className="form-column">
                  <h4>Teste</h4>
                  <p></p>
                 </div>
              </form>
            </div>
            <div className="row justify-content-center">
              <button type="button" class="btn btn-info">
                Recalcular
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
