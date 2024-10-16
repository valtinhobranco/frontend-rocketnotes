import { ReactNode } from 'react';

// ? styles
import * as Styles from "./styles";

interface SectionProps {
  children: ReactNode;
  title:string;
}

export function Section(props : SectionProps) {
  return (
    <Styles.Container>
      <h2 >{props.title}</h2>
      {props.children}
    </Styles.Container>
  );
}
