import { DOMAttributes, ReactElement, ReactNode } from 'react';
import './button.styles.css';

interface ButtonProps extends DOMAttributes<HTMLDivElement> {
   children: ReactNode;
   isActive?: boolean;
   isSmall?: boolean;
   isHoverActive?: boolean;
}

const ButtonAtm = ({
   children,
   isActive,
   isSmall,
   isHoverActive,
   ...restProps
}: ButtonProps): ReactElement<ButtonProps> => {
   return (
      <div
         className={`
            button 
            ${isActive ? 'active' : ''}
            ${isSmall ? 'small' : ''}
            ${isHoverActive ? 'hover-active' : ''}
         `}
         {...restProps}
      >
         {children}
      </div>
   );
};

export default ButtonAtm;
