import { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FormFieldOrg from '../FormFieldOrg';
import SelectMol from '../../molecules/SelectMol';
import TextAreaMol from '../../molecules/TextAreaMol';
import { getTextAreaLimit } from '../../../helpers/getTextAreaLimit';
import {
   MATERIAL_COLORS,
   T_SHIRT_SIDES,
   TEXT_SIZES,
   TShirtState,
} from '../../../store/tShirtSlice/tShirtSlice.types';
import {
   tShirtColorChange,
   tShirtSideChange,
   tShirtTextPropsChange,
} from '../../../store/tShirtSlice';
import ButtonsSelectMol from '../../molecules/ButtonsSelectMol';
import MobileColorListSelectMol from '../../molecules/MobileColorListSelectMol';
import './settings.styles.css';

interface SettingsProps {
   isSettingsMobileVisible: boolean;
   isColorSelectMobileVisible: boolean;
}

const SettingsOrg = ({
   isSettingsMobileVisible,
   isColorSelectMobileVisible,
}: SettingsProps): ReactElement => {
   const tShirt = useSelector((state: TShirtState) => state.tShirt);
   const dispatch = useDispatch();

   const activeText =
      tShirt.side === T_SHIRT_SIDES.FRONT ? tShirt.frontText : tShirt.backText;

   return (
      <div
         className={`
         settings__wrapper
         ${isSettingsMobileVisible ? 'mobile-settings-visible' : ''}
         ${isColorSelectMobileVisible ? 'color-setings-visible' : ''}
      `}
      >
         <div className="settings">
            <div className="settings__content">
               <h2 className="settings__title">Personalize your product</h2>

               <div className="settings__form">
                  <FormFieldOrg label="Material color" isHideOnMobile>
                     <SelectMol
                        values={Object.values(MATERIAL_COLORS)}
                        activeValue={tShirt.color}
                        setActiveValue={(value: string) =>
                           dispatch(
                              tShirtColorChange({
                                 color: value as MATERIAL_COLORS,
                              }),
                           )
                        }
                        hasColors
                     />
                  </FormFieldOrg>

                  <FormFieldOrg label="T-shirt side">
                     <ButtonsSelectMol
                        values={Object.values(T_SHIRT_SIDES)}
                        activeValue={tShirt.side}
                        setActiveValue={(value: string) =>
                           dispatch(
                              tShirtSideChange({
                                 side: value as T_SHIRT_SIDES,
                              }),
                           )
                        }
                     />
                  </FormFieldOrg>

                  <FormFieldOrg label="Text size">
                     <SelectMol
                        values={Object.values(TEXT_SIZES)}
                        activeValue={activeText.size}
                        setActiveValue={(value: string) =>
                           dispatch(
                              tShirtTextPropsChange({
                                 size: value as TEXT_SIZES,
                              }),
                           )
                        }
                     />
                  </FormFieldOrg>

                  <FormFieldOrg label="Text">
                     <TextAreaMol
                        content={activeText.text}
                        setContent={(value: string) =>
                           dispatch(
                              tShirtTextPropsChange({
                                 text: value,
                              }),
                           )
                        }
                        maxChars={getTextAreaLimit(activeText.size)}
                     />
                  </FormFieldOrg>
               </div>

               <div className="settings__mobile-color-list">
                  <MobileColorListSelectMol />
               </div>
            </div>
         </div>
      </div>
   );
};

export default SettingsOrg;
