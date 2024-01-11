import { ReactElement } from 'react';
import HeaderOrg from '../../organisms/HeaderOrg';
import PreviewOrg from '../../organisms/PreviewOrg';
import SettingsOrg from '../../organisms/SettingsOrg';
import './mainLayout.styles.css';
import { CreatorContextProvider } from '../../../providers/CreatorContextProvider';

const MainLayout = (): ReactElement => {
   return (
      <div className="mainContainer">
         <HeaderOrg />

         <CreatorContextProvider>
            <div className="mainContainer__creator">
               <PreviewOrg />

               <SettingsOrg />
            </div>
         </CreatorContextProvider>
      </div>
   );
};

export default MainLayout;
