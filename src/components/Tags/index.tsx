
// ? styles
import * as Styles from "./styles";


interface TagsProps {
  title: string;
}

export function Tags(props: TagsProps) {
  return (
    <Styles.Container>
      {props.title}
    </Styles.Container>
  );
}
