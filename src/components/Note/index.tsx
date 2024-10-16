
import { HTMLAttributes } from 'react';

// ? components
import { Tags } from '../Tags';

// ? styles
import * as Styles from "./styles";

interface NoteProps extends HTMLAttributes<HTMLButtonElement> {
  data: {
    title: string
    tags: {
      id: string
      name: string
    }[]
  };
}

export function Note({ data, ...rest }: NoteProps) {
  return (
    <Styles.Container {...rest}>
      <h1>{data.title}</h1>
      {
        data.tags && (
          <footer>
            {
              data.tags.map(tag => <Tags key={tag.id} title={ tag.name} />  )
            }
          </footer>
        )
        
      }
     
    </Styles.Container>
  );
}
