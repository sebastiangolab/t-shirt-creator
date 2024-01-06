import { ReactElement } from 'react';
import HeaderOrg from '../../organisms/HeaderOrg';
import PreviewOrg from '../../organisms/PreviewOrg';
import SettingsOrg from '../../organisms/SettingsOrg';
import './mainLayout.styles.css';

const MainLayout = (): ReactElement => {
   return (
      <div className="mainContainer">
         <HeaderOrg />

         <div className="mainContainer__creator">
            <PreviewOrg />

            <SettingsOrg />
         </div>
      </div>
   );
};

export default MainLayout;
