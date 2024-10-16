import type { HTMLAttributes } from 'react';


// ? styles
import * as Styles from "./styles";

export interface ButtonTextProps extends HTMLAttributes<HTMLButtonElement>  {
  title?: string;
  $isactive?: boolean;
}

export function ButtonText({title, $isactive , ...rest}: ButtonTextProps) {
  
  return (
    <Styles.Container {...rest} $isactive={$isactive}  type='button'>
       {title}
    </Styles.Container>
  );
}
