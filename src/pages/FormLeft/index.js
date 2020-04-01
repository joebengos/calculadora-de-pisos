import React, {useState} from "react";
import "./style.css";
import { Header } from "../../components/Header";

export const FormLeft = () => {
  const [Warea, setWarea] = useState(''); // Area em m quadrados
  const [Harea, setHarea] = useState(''); // largura de um piso


  const handleCalc = () => {
    if (Warea.length === 0 || Harea.length === 0) alert('Preencha todos os campos!')

  }

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
                  <input type="text" value={Warea} onChange={(event) => {setWarea(event.target.value.replace(/\D/g,''))}} />
                </div>
                <div className="input-group">
                  <label>Comprimento do ambiente em metros</label>
                  <input type="text" value={Harea} onChange={(event) => {setHarea(event.target.value.replace(/\D/g,''))}} />
                </div>
              </form>
              <div className="colum-text">
                <h4>Texto sobre os valores do calculo</h4>
                <p>
                  Texto sobre os valores do calculoLorem Ipsum is simply dummy
                  text of the printing and typesetting industry. Lorem Ipsum has
                  been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it
                  to make a type specimen book. It has survived not only five
                  centuries, but also the leap into electronic typesetting,
                </p>
              </div>
            </div>
            <div className="row justify-content-center">
              <button type="button" className="btn btn-info" onClick={handleCalc}>
                Calcular
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
