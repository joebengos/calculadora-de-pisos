import React from 'react';

interface FormProps {
  submitFormFunctio: () => void;
}

const Form: React.FC<FormProps> = ({children, submitFormFunctio}) => {
  return <form onSubmit={submitFormFunctio}>{children}</form>;
};

export default Form;
