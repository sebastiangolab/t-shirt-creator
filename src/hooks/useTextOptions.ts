import { useState } from 'react';
import { HORIZONTAL_POSITIONS, TEXT_SIZES, VERTICAL_POSITIONS } from '../types';

export interface TextOptionsResult {
   text: string;
   setText: (text: string) => void;
   activeTextSize: TEXT_SIZES;
   setActiveTextSize: (testSize: TEXT_SIZES) => void;
   horizontalPosition: HORIZONTAL_POSITIONS;
   setHorizontalPosition: (horizontalPosition: HORIZONTAL_POSITIONS) => void;
   verticalPosition: VERTICAL_POSITIONS;
   setVerticalPosition: (verticalPosition: VERTICAL_POSITIONS) => void;
   textSizes: TEXT_SIZES[];
}

export const textOptionsInit: TextOptionsResult = {
   text: '',
   setText: () => null,
   activeTextSize: TEXT_SIZES.REGULAR,
   setActiveTextSize: () => null,
   horizontalPosition: HORIZONTAL_POSITIONS.LEFT,
   setHorizontalPosition: () => null,
   verticalPosition: VERTICAL_POSITIONS.TOP,
   setVerticalPosition: () => null,
   textSizes: Object.values(TEXT_SIZES),
};

export const useTextOptions = (): TextOptionsResult => {
   const [text, setText] = useState<string>(textOptionsInit.text);
   const [activeTextSize, setActiveTextSize] = useState<TEXT_SIZES>(
      textOptionsInit.activeTextSize,
   );

   const [horizontalPosition, setHorizontalPosition] =
      useState<HORIZONTAL_POSITIONS>(textOptionsInit.horizontalPosition);
   const [verticalPosition, setVerticalPosition] = useState<VERTICAL_POSITIONS>(
      textOptionsInit.verticalPosition,
   );

   const textSizes = textOptionsInit.textSizes;

   return {
      text,
      setText,
      activeTextSize,
      setActiveTextSize,
      horizontalPosition,
      setHorizontalPosition,
      verticalPosition,
      setVerticalPosition,
      textSizes,
   };
};
