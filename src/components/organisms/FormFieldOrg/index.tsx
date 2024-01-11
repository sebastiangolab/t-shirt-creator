import { ReactNode } from 'react';
import './formField.styles.css';

interface FormFieldProps {
   label: string;
   children: ReactNode;
}

const FormFieldOrg = ({ label, children }: FormFieldProps) => {
   return (
      <div className="field">
         <label className="field__label">{label}</label>
         {children}
      </div>
   );
};

export default FormFieldOrg;
