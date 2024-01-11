import { ReactElement } from 'react';
import { getStringWithFirstUppercaseLetter } from '../../../helpers/getStringWithFirstUppercaseLetter';
import './selectItem.styles.css';

interface SelectItemProps {
   value: string;
   onClick: () => void;
   isActive?: boolean;
   isSelectOpen?: boolean;
   isColor?: boolean;
}

const SelectItemAtm = ({
   value,
   onClick,
   isActive,
   isSelectOpen,
   isColor,
}: SelectItemProps): ReactElement<SelectItemProps> => {
   return (
      <div
         className={`
            select__item 
            ${isActive ? 'active' : ''}
            ${isSelectOpen ? 'open' : ''}
            ${isColor ? 'color' : ''}
         `}
         onClick={onClick}
      >
         {isColor ? (
            <div
               className={`
                  select__item--color
                  ${value}
               `}
            ></div>
         ) : null}

         <p className="select__item--text">
            {getStringWithFirstUppercaseLetter(value)}
         </p>
      </div>
   );
};

export default SelectItemAtm;
