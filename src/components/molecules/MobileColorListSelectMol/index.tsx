import { useDispatch } from 'react-redux';
import { MATERIAL_COLORS } from '../../../store/tShirtSlice/tShirtSlice.types';
import SelectItemAtm from '../../atoms/SelectItemAtm';
import { tShirtColorChange } from '../../../store/tShirtSlice';
import './mobileColorListSelect.styles.css';

const MobileColorListSelectMol = () => {
   const dispatch = useDispatch();

   const values: string[] = Object.values(MATERIAL_COLORS);

   const handleOnClick = (value: string) => {
      dispatch(
         tShirtColorChange({
            color: value as MATERIAL_COLORS,
         }),
      );
   };

   return (
      <div className="color-list">
         {values.map((value: string, index: number) => (
            <SelectItemAtm
               key={`${value}-${index}`}
               value={value}
               onClick={() => handleOnClick(value)}
               isColor
            />
         ))}
      </div>
   );
};

export default MobileColorListSelectMol;
