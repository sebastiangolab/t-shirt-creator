import { MutableRefObject, ReactElement, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spline from '@splinetool/react-spline';
import { Application } from '@splinetool/runtime';
import {
   T_SHIRT_SIDES,
   TShirtState,
} from '../../../store/tShirtSlice/tShirtSlice.types';
import ButtonsSelectMol from '../../molecules/ButtonsSelectMol';
import { tShirtSideChange } from '../../../store/tShirtSlice';
import './preview.styles.css';
import { getTextSizePx } from '../../../helpers/textSizesInPx';

const PreviewOrg = (): ReactElement => {
   const tShirt = useSelector((state: TShirtState) => state.tShirt);
   const dispatch = useDispatch();
   const splineObject: MutableRefObject<Application | undefined> = useRef();

   const onLoad = (spline: Application) => {
      splineObject.current = spline;
   };

   useEffect(() => {
      if (splineObject.current) {
         splineObject.current.setVariables({
            color: tShirt.color,
            isFront: tShirt.side === T_SHIRT_SIDES.FRONT,
            frontText: tShirt.frontText.text,
            frontSize: getTextSizePx(tShirt.frontText.size),
            backText: tShirt.backText.text,
            backSize: getTextSizePx(tShirt.backText.size),
         });
      }
   }, [tShirt]);

   return (
      <div className="preview">
         <div className="preview__side">
            <ButtonsSelectMol
               values={Object.values(T_SHIRT_SIDES)}
               activeValue={tShirt.side}
               setActiveValue={(value: string) =>
                  dispatch(
                     tShirtSideChange({
                        side: value as T_SHIRT_SIDES,
                     }),
                  )
               }
               hasSmallButtons
            />
         </div>

         <Spline
            scene="https://prod.spline.design/IEuqCDhk-nhN62a3/scene.splinecode"
            onLoad={onLoad}
         />
      </div>
   );
};

export default PreviewOrg;
