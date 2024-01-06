import { ReactElement, ReactNode } from 'react';
import './mainContainer.styles.css';

interface MainContainerProps {
   children: ReactNode;
}

const MainContainer = ({
   children,
}: MainContainerProps): ReactElement<MainContainerProps> => {
   return <div className="mainContainer">{children}</div>;
};

export default MainContainer;
