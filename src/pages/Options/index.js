import React from "react";
import "./style.css";
import { Header } from "../../components/Header";
import Box from "../../assets/box.svg";
import TapeMeasure from "../../assets/tape-measure.svg";
import { Link } from "react-router-dom";
export const Options = () => {

  return (
    <>
    <Header />
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8 col-sm-12">
          <h1 className="page-title">Calculadora de piso online</h1>
          <div className="row justify-content-between">
            <Link className="option-button" to="/use-box">
              <img src={Box} alt="--" />
              <label>Calcular por caixa</label>
            </Link>
            <div className="separator" />
            <Link className="option-button" to="/use-messure">
              <img src={TapeMeasure} alt="--" />
              <label>Calcular por m²</label>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
