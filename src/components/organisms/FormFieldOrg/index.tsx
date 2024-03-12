import { ReactNode } from 'react';
import './formField.styles.css';

interface FormFieldProps {
   label: string;
   children: ReactNode;
   isHideOnMobile?: boolean;
}

const FormFieldOrg = ({ label, children, isHideOnMobile }: FormFieldProps) => {
   return (
      <div
         className={`
         field
         ${isHideOnMobile ? 'field__mobile--hide' : 'null'}
      `}
      >
         <label className="field__label">{label}</label>
         {children}
      </div>
   );
};

export default FormFieldOrg;
