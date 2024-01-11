import { createContext, ReactElement, ReactNode } from 'react';
import {
   CreatorResult,
   creatorResultInit,
   useCreator,
} from '../hooks/useCreator';

interface CreatorContextProviderProps {
   children: ReactNode;
}

export const CreatorContext = createContext<CreatorResult>(creatorResultInit);

export const CreatorContextProvider = ({
   children,
}: CreatorContextProviderProps): ReactElement<CreatorContextProviderProps> => {
   const creatorValues = useCreator();

   return (
      <CreatorContext.Provider value={{ ...creatorValues }}>
         {children}
      </CreatorContext.Provider>
   );
};
