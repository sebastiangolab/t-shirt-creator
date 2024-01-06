import { ReactElement } from 'react';
import './header.styles.css';

const Header = (): ReactElement => {
   return (
      <div className="header">
         <h1 className="header__title">
            <span className="red">T-shirt</span> Creator
         </h1>

         <p className="header__author">Made by Sebastian Gołąb</p>
      </div>
   );
};

export default Header;
