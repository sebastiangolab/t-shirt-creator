export enum T_SHIRT_SIDES {
   FRONT = 'front side',
   BACK = 'back side',
}

export enum MATERIAL_COLORS {
   WHITE = 'white',
   BLACK = 'black',
   RED = 'red',
   GREEN = 'green',
   BLUE = 'blue',
   YELLOW = 'yellow',
}

export enum TEXT_SIZES {
   SMALL = 'small',
   REGULAR = 'regular',
   LARGE = 'large',
}

export interface TextOptionsProps {
   text: string;
   size: TEXT_SIZES;
}

export interface TShirtProps {
   side: T_SHIRT_SIDES;
   color: MATERIAL_COLORS;
   frontText: TextOptionsProps;
   backText: TextOptionsProps;
}

export interface TShirtSideChangeAction {
   payload: {
      side: T_SHIRT_SIDES;
   };
   type: string;
}

export interface TShirtColorChangeAction {
   payload: {
      color: MATERIAL_COLORS;
   };
   type: string;
}

export interface tShirtTextPropsChangeAction {
   payload: {
      text?: string;
      size?: TEXT_SIZES;
   };
   type: string;
}

export interface TShirtState {
   tShirt: TShirtProps;
}
