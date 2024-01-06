import { ReactElement, ReactNode } from 'react';
import './mainContainer.styles.css';

interface MainContainerProps {
   children: ReactNode;
}

const MainContainerOrg = ({
   children,
}: MainContainerProps): ReactElement<MainContainerProps> => {
   return <div className="mainContainer">{children}</div>;
};

export default MainContainerOrg;
