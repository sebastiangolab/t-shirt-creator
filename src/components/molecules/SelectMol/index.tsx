import { ReactElement, useState } from 'react';
import SelectItemAtm from '../../atoms/SelectItemAtm';
import './select.styles.css';

interface SelectProps {
   values: string[];
   activeValue: string;
   setActiveValue: (value: string) => void;
   hasColors?: boolean;
}

const SelectMol = ({
   values,
   activeValue,
   setActiveValue,
   hasColors,
}: SelectProps): ReactElement | null => {
   const [isOpen, setIsOpen] = useState(false);

   const valuesWithoutActive: string[] = values.filter(
      (value: string) => value !== activeValue,
   );

   const handleSelectItemOnClick = (value?: string) => {
      if (value) {
         setActiveValue(value);
      }

      setIsOpen((prevState: boolean) => !prevState);
   };

   if (!activeValue) {
      return null;
   }

   return (
      <div className="select">
         <SelectItemAtm
            value={activeValue}
            onClick={() => handleSelectItemOnClick()}
            isSelectOpen={isOpen}
            isColor={hasColors}
            isActive
         />

         <div className={`select__items ${isOpen ? 'open' : ''}`}>
            {valuesWithoutActive.map((value: string, index: number) => (
               <SelectItemAtm
                  key={`${value}-${index}`}
                  value={value}
                  onClick={() => {
                     handleSelectItemOnClick(value);
                  }}
                  isSelectOpen={isOpen}
                  isColor={hasColors}
               />
            ))}
         </div>
      </div>
   );
};

export default SelectMol;
