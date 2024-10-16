import { InputHTMLAttributes } from 'react';

// ? icons
import * as Icon from "react-icons/fi";

// ? types
export interface NoteItemProps extends InputHTMLAttributes<HTMLInputElement>  {
  $isnew?: boolean
  value?: string
  onClick?: any;
};




// ? styles
import * as Styles from "./styles";


export function NoteItem({ $isnew, value, onClick, ...rest }: NoteItemProps) {
  return (
    <Styles.Container $isnew={$isnew}>
      <input type="text" value={value} readOnly={!$isnew} {...rest} />
      <button onClick={onClick} className={$isnew ? 'button-add' : 'button-delete'} type='button'>
        
        { $isnew ? <Icon.FiPlus /> : <Icon.FiX/> }
      </button>
     
    </Styles.Container>
  );
}
