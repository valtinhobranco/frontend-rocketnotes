import { TextareaHTMLAttributes } from 'react';


// ? styles
import * as Styles from "./styles";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  value?: string;
}

export function TextArea({value, ...rest } : TextAreaProps) {
  return (
    <Styles.Container {...rest }>
      {value}
    </Styles.Container>
  );
}
