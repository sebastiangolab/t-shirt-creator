import { useState } from 'react';
import { MATERIAL_COLORS } from '../types';
import {
   textOptionsInit,
   TextOptionsResult,
   useTextOptions,
} from './useTextOptions';

export interface CreatorResult {
   isFrontSideActive: boolean;
   setIsFrontSideActive: (isFrontSideActive: boolean) => void;
   activeColor: MATERIAL_COLORS;
   setActiveColor: (color: MATERIAL_COLORS) => void;
   frontSide: TextOptionsResult;
   backSide: TextOptionsResult;
   materialColors: MATERIAL_COLORS[];
}

export const creatorResultInit: CreatorResult = {
   isFrontSideActive: true,
   setIsFrontSideActive: () => null,
   activeColor: MATERIAL_COLORS.BLACK,
   setActiveColor: () => null,
   frontSide: textOptionsInit,
   backSide: textOptionsInit,
   materialColors: Object.values(MATERIAL_COLORS),
};

export const useCreator = (): CreatorResult => {
   const [isFrontSideActive, setIsFrontSideActive] = useState<boolean>(
      creatorResultInit.isFrontSideActive,
   );
   const [activeColor, setActiveColor] = useState<MATERIAL_COLORS>(
      creatorResultInit.activeColor,
   );

   const frontTextOptions = useTextOptions();
   const backTextOptions = useTextOptions();

   const materialColors = creatorResultInit.materialColors;

   return {
      isFrontSideActive,
      setIsFrontSideActive,
      activeColor,
      setActiveColor,
      frontSide: {
         ...frontTextOptions,
      },
      backSide: {
         ...backTextOptions,
      },
      materialColors,
   };
};
