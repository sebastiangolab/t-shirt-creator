import { createSlice } from '@reduxjs/toolkit';
import {
   MATERIAL_COLORS,
   T_SHIRT_SIDES,
   TEXT_SIZES,
   TextOptionsProps,
   TShirtColorChangeAction,
   TShirtProps,
   TShirtSideChangeAction,
   tShirtTextPropsChangeAction,
} from './tShirtSlice.types';

const textInitOptionsObject: TextOptionsProps = {
   text: '',
   size: TEXT_SIZES.REGULAR,
};

const tShirtInitObject: TShirtProps = {
   side: T_SHIRT_SIDES.FRONT,
   color: MATERIAL_COLORS.WHITE,
   frontText: textInitOptionsObject,
   backText: textInitOptionsObject,
};

const tShirtSlice = createSlice({
   name: 'tShirt',
   initialState: tShirtInitObject,
   reducers: {
      tShirtSideChange(state: TShirtProps, action: TShirtSideChangeAction) {
         state.side = action.payload.side;
      },
      tShirtColorChange(state: TShirtProps, action: TShirtColorChangeAction) {
         state.color = action.payload.color;
      },
      tShirtTextPropsChange(
         state: TShirtProps,
         action: tShirtTextPropsChangeAction,
      ) {
         if (state.side === T_SHIRT_SIDES.FRONT) {
            state.frontText.text =
               action.payload.text !== undefined
                  ? action.payload.text
                  : state.frontText.text;

            state.frontText.size = action.payload.size || state.frontText.size;
         } else if (state.side === T_SHIRT_SIDES.BACK) {
            state.backText.text =
               action.payload.text !== undefined
                  ? action.payload.text
                  : state.backText.text;

            state.backText.size = action.payload.size || state.backText.size;
         }
      },
   },
});

export const { tShirtSideChange, tShirtColorChange, tShirtTextPropsChange } =
   tShirtSlice.actions;

export default tShirtSlice.reducer;
