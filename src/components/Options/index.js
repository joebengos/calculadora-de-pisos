import React from 'react'
import './style.css';

import Box from '../../assets/box.svg';
import TapeMeasure from '../../assets/tape-measure.svg'

export const Options = () => (
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-8 col-sm-12">
                <h1 className="page-title">Calculadora de piso online</h1>
                <div className="row justify-content-between">
                    <button className="option-button">
                        <img src={Box} alt="--"/> 
                        <label>Calcular por caixa</label>
                    </button>
                    <div className="separator" />
                    <button className='option-button'>
                        <img src={TapeMeasure} alt="--"/> 
                        <label>Calcular por m²</label>
                    </button>
                </div>
            </div>
        </div>
    </div>
);