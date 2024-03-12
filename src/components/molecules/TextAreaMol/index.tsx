import { FormEvent, ReactElement, useEffect } from 'react';
import './textArea.styles.css';

interface TextFieldProps {
   content: string;
   setContent: (value: string) => void;
   maxChars: number;
}

const TextAreaMol = ({
   content,
   setContent,
   maxChars,
}: TextFieldProps): ReactElement<TextFieldProps> => {
   const handleTextAreaChange = (event: FormEvent<HTMLTextAreaElement>) => {
      if (event.currentTarget.value.length <= maxChars) {
         setContent(event.currentTarget.value);
      }
   };

   useEffect(() => {
      if (content.length > maxChars) {
         setContent(content.slice(0, maxChars));
      }
   }, [maxChars]);

   return (
      <div className="text-area">
         <textarea
            value={content}
            className="text-area__input"
            onChange={handleTextAreaChange}
         />

         <p className="text-area__limit">
            {content.length} / {maxChars} characters
         </p>
      </div>
   );
};

export default TextAreaMol;
