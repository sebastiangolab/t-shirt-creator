import { TEXT_SIZES } from '../store/tShirtSlice/tShirtSlice.types';

const textSizesCharLimits = {
   [TEXT_SIZES.LARGE]: 121,
   [TEXT_SIZES.REGULAR]: 166,
   [TEXT_SIZES.SMALL]: 250,
};

export const getTextAreaLimit = (testSize: TEXT_SIZES): number =>
   textSizesCharLimits[testSize];
