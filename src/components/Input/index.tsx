import { InputHTMLAttributes } from 'react';


// ? styles
import * as Styles from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  Icon?: any;
}

export function Input({ Icon, ...rest }: InputProps) {
  return (
    <Styles.Container  >
      {Icon && <Icon size={20} />}
         <input  {...rest} />
     
    </Styles.Container>
  );
}
