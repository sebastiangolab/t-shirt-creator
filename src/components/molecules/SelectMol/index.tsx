import { ReactElement, useEffect, useMemo, useRef, useState } from 'react';
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
   const selectRef = useRef<HTMLDivElement | null>(null);

   const handleSelectItemOnClick = (value?: string) => {
      if (value) {
         setActiveValue(value);
      }

      setIsOpen((prevState: boolean) => !prevState);
   };

   const handleOutSideClick = (event: MouseEvent) => {
      const target = event.target as Element;

      if (!selectRef.current?.contains(target)) {
         setIsOpen(false);
      }
   };

   useEffect(() => {
      if (isOpen) {
         window.addEventListener('click', handleOutSideClick);
      } else {
         window.removeEventListener('click', handleOutSideClick);
      }

      return () => {
         window.removeEventListener('click', handleOutSideClick);
      };
   }, [isOpen]);

   const valuesWithoutActive: string[] = useMemo(
      () => values.filter((value: string) => value !== activeValue),
      [values],
   );

   if (!activeValue) {
      return null;
   }

   return (
      <div className="select" ref={selectRef}>
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
