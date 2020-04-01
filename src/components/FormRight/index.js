import React from "react";
import "./style.css";

export const FormRight = () => (
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-8 col-sm-12">
        <h1 className="page-title">Calculadora de piso online</h1>
        <div className="row justify-content-between">
          <form className="form-full">
            <div className="form-column">
              <div className="input-group">
                <label>Total em metros quadrados da área</label>
                <input type="text" />
              </div>
              <div className="input-group">
                <label>Largura do piso em CM</label>
                <input type="text" />
              </div>
              <div className="input-group">
                <label>Altura do piso em CM</label>
                <input type="text" />
              </div>
            </div>
            <div className="form-column">
              <div className="input-group">
                <label>Quantidade de pisos por caixa</label>
                <input type="text" />
              </div>
              <div className="input-group">
                <label>Valor de 1 caixa</label>
                <input type="text" />
              </div>
            </div>
          </form>
          
        </div>
        <div className="row justify-content-center">
          
          <button type="button" class="btn btn-info">
            Calcular
          </button>
        </div>
      </div>
    </div>
  </div>
);
