import React, {useState} from "react";
import "./style.css";
import { Header } from "../../components/Header";
export const FormRight = () => {

  const [area, setArea] = useState(''); // Area em m quadrados
  const [Wpiso, setWPiso] = useState(''); // largura de um piso
  const [Hpiso, setHpiso] = useState(''); // altura de um piso
  const [pisoCx, setPisoCx] = useState(''); // Quantidade de piso / caixa
  const [valoCx, setValorCx] = useState(''); // valor de uma caixa

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
                    <input type="text" value={area} onChange={(event) => {setArea(event.target.value.replace(/\D/g,''))}} />
                  </div>
                  <div className="input-group">
                    <label>Largura do piso em CM</label>
                    <input type="text" value={Wpiso} onChange={(event) => {setWPiso(event.target.value.replace(/\D/g,''))}} />
                  </div>
                  <div className="input-group">
                    <label>Altura do piso em CM</label>
                    <input type="text" value={Hpiso} onChange={(event) => {setHpiso(event.target.value.replace(/\D/g,''))}} />
                  </div>
                </div>
                <div className="form-column">
                  <div className="input-group">
                    <label>Quantidade de pisos por caixa</label>
                    <input type="text" value={pisoCx} onChange={(event) => {setPisoCx(event.target.value.replace(/\D/g,''))}} />
                  </div>
                  <div className="input-group">
                    <label>Valor de 1 caixa</label>
                    <input type="text" value={valoCx} onChange={(event) => {setValorCx(event.target.value.replace(/\D/g,''))}} />
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
    </>
  );
};
