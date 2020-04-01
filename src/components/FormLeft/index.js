import React from "react";
import "./style.css";

export const FormLeft = () => (
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-8 col-sm-12">
        <h1 className="page-title">Calculadora de piso online</h1>
        <div className="row justify-content-between">
          <form className="form-left">
            <div className="input-group">
              <label>Largura do ambiente em metros</label>
              <input type="text" />
            </div>
            <div className="input-group">
              <label>Comprimento do ambiente em metros</label>
              <input type="text" />
            </div>
            <div className="input-group">
              <label>Valor do piso em por metro (opcional)</label>
              <input type="text" />
            </div>
          </form>
          <div className="colum-text">
            <h4>Texto sobre os valores do calculo</h4>
            <p>
              Texto sobre os valores do calculoLorem Ipsum is simply dummy text
              of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting,
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
            <button type="button" class="btn btn-info">Calcular</button>
        </div>
      </div>
    </div>
  </div>
);
