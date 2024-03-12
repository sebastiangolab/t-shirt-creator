import { TEXT_SIZES } from '../store/tShirtSlice/tShirtSlice.types';

const textSizesInPx = {
   [TEXT_SIZES.LARGE]: 20,
   [TEXT_SIZES.REGULAR]: 16,
   [TEXT_SIZES.SMALL]: 13,
};

export const getTextSizePx = (testSize: TEXT_SIZES): number =>
   textSizesInPx[testSize];
