import React from 'react';
import './style.css';
import {Header} from '../../components/Header';

interface CalcOrcamentoProps {}

export const CalcOrcamento: React.FC<CalcOrcamentoProps> = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row justify-content-center"></div>
      </div>
    </>
  );
};
