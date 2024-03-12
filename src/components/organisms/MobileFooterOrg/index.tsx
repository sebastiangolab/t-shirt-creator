import { Dispatch, SetStateAction } from 'react';
import ButtonAtm from '../../atoms/ButtonAtm';
import './mobileFooter.styles.css';

interface MobileFooterProps {
   isSettingsMobileVisible: boolean;
   setIsSettingsMobileVisible: Dispatch<SetStateAction<boolean>>;
   isColorSelectMobileVisible: boolean;
   setIsColorSelectMobileVisible: Dispatch<SetStateAction<boolean>>;
}

const MobileFooterOrg = ({
   isSettingsMobileVisible,
   setIsSettingsMobileVisible,
   isColorSelectMobileVisible,
   setIsColorSelectMobileVisible,
}: MobileFooterProps) => {
   return (
      <div
         className={`
         mobile-footer
         ${isSettingsMobileVisible ? 'settings-visible' : ''}
         ${isColorSelectMobileVisible ? 'color-select-visible' : ''}
      `}
      >
         <div className="mobile-footer__settings">
            <ButtonAtm
               onClick={() =>
                  setIsSettingsMobileVisible((prevState: boolean) => !prevState)
               }
               isHoverActive
            >
               {isSettingsMobileVisible
                  ? 'Hide text settings'
                  : 'Text settings'}
            </ButtonAtm>
         </div>

         <div className="mobile-footer__color-select">
            <ButtonAtm
               onClick={() =>
                  setIsColorSelectMobileVisible(
                     (prevState: boolean) => !prevState,
                  )
               }
               isHoverActive
            >
               {isColorSelectMobileVisible
                  ? 'Hide material color'
                  : 'Material color'}
            </ButtonAtm>
         </div>
      </div>
   );
};

export default MobileFooterOrg;
