import {
   MutableRefObject,
   ReactElement,
   useContext,
   useEffect,
   useRef,
} from 'react';
import Spline from '@splinetool/react-spline';
import { Application } from '@splinetool/runtime';
import { CreatorContext } from '../../../providers/CreatorContextProvider';
import './preview.styles.css';

const PreviewOrg = (): ReactElement => {
   const { activeColor } = useContext(CreatorContext);
   const splineObject: MutableRefObject<Application | undefined> = useRef();

   const onLoad = (spline: Application) => {
      splineObject.current = spline;
   };

   useEffect(() => {
      if (splineObject.current) {
         splineObject.current.setVariables({
            color: activeColor,
         });
      }
   }, [activeColor]);

   return (
      <div className="preview">
         <Spline
            scene="https://prod.spline.design/IEuqCDhk-nhN62a3/scene.splinecode"
            onLoad={onLoad}
         />
      </div>
   );
};

export default PreviewOrg;
