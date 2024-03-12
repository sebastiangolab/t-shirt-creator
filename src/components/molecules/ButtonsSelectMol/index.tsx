import { ReactElement } from 'react';
import ButtonAtm from '../../atoms/ButtonAtm';
import { getStringWithFirstUppercaseLetter } from '../../../helpers/getStringWithFirstUppercaseLetter';
import './buttonsSelect.styles.css';

interface ButtonsSelectMol {
   values: string[];
   activeValue: string;
   setActiveValue: (value: string) => void;
   hasSmallButtons?: boolean;
}

const ButtonsSelectMol = ({
   values,
   activeValue,
   setActiveValue,
   hasSmallButtons,
}: ButtonsSelectMol): ReactElement<ButtonsSelectMol> => {
   return (
      <div className="buttons">
         {values.map((value: string, index: number) => (
            <ButtonAtm
               key={`${value}-${index}`}
               isActive={activeValue === value}
               onClick={() => setActiveValue(value)}
               isSmall={hasSmallButtons}
            >
               {getStringWithFirstUppercaseLetter(value)}
            </ButtonAtm>
         ))}
      </div>
   );
};

export default ButtonsSelectMol;
