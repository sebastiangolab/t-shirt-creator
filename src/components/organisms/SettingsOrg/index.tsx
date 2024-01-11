import { ReactElement, useContext } from 'react';
import FormFieldOrg from '../FormFieldOrg';
import SelectMol from '../../molecules/SelectMol';
import { CreatorContext } from '../../../providers/CreatorContextProvider';
import { MATERIAL_COLORS, TEXT_SIZES } from '../../../types';
import './settings.styles.css';

const SettingsOrg = (): ReactElement => {
   const { materialColors, activeColor, setActiveColor, frontSide } =
      useContext(CreatorContext);

   return (
      <div className="settings">
         <h2 className="settings__title">Personalize you product</h2>

         <div className="settings__form">
            <FormFieldOrg label="Material color">
               <SelectMol
                  values={materialColors}
                  activeValue={activeColor}
                  setActiveValue={(value: string) =>
                     setActiveColor(value as MATERIAL_COLORS)
                  }
                  hasColors
               />
            </FormFieldOrg>

            <FormFieldOrg label="Text size">
               <SelectMol
                  values={frontSide.textSizes}
                  activeValue={frontSide.activeTextSize}
                  setActiveValue={(value: string) =>
                     frontSide.setActiveTextSize(value as TEXT_SIZES)
                  }
               />
            </FormFieldOrg>
         </div>
      </div>
   );
};

export default SettingsOrg;
