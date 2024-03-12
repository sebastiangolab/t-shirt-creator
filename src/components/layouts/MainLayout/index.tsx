import { ReactElement, useState } from 'react';
import { Provider } from 'react-redux';
import HeaderOrg from '../../organisms/HeaderOrg';
import PreviewOrg from '../../organisms/PreviewOrg';
import SettingsOrg from '../../organisms/SettingsOrg';
import MobileFooterOrg from '../../organisms/MobileFooterOrg';
import { store } from '../../../store/store';
import './mainLayout.styles.css';

const MainLayout = (): ReactElement => {
   const [isSettingsMobileVisible, setIsSettingsMobileVisible] =
      useState(false);
   const [isColorSelectMobileVisible, setIsColorSelectMobileVisible] =
      useState(false);

   return (
      <div className="mainContainer">
         <HeaderOrg />

         <Provider store={store}>
            <div className="mainContainer__creator">
               <PreviewOrg />

               <SettingsOrg
                  isSettingsMobileVisible={isSettingsMobileVisible}
                  isColorSelectMobileVisible={isColorSelectMobileVisible}
               />
            </div>

            <MobileFooterOrg
               isSettingsMobileVisible={isSettingsMobileVisible}
               setIsSettingsMobileVisible={setIsSettingsMobileVisible}
               isColorSelectMobileVisible={isColorSelectMobileVisible}
               setIsColorSelectMobileVisible={setIsColorSelectMobileVisible}
            />
         </Provider>
      </div>
   );
};

export default MainLayout;
