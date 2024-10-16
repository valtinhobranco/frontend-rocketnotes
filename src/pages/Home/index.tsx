import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
// ? icons
import * as Icon from "react-icons/fi";

// ? components
import { ButtonText } from '../../components/ButtonText';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Note } from '../../components/Note';
import { Section } from '../../components/Section';

// ? styles
import * as Styles from "./styles";
import { useEffect, useState } from "react";

export function Home() {
  const [search, setSearch] = useState<string>('')
  const [tags, setTags] = useState<string[]>([])
  const [tagsSelected, setTagsSelected] = useState<string[]>([])
  const [notes, setNotes] = useState<string[]>([])

  const navigate = useNavigate()

  function handleTagsSelected(tagName: string) {
    if (tagName === "all") {
     return setTagsSelected([])
    }

    const alreadySelected = tagsSelected.includes(tagName)

  if (alreadySelected) {
    const filteredTags = tagsSelected.filter(tag => tag !== tagName)
    setTagsSelected(filteredTags)
  } else {
    setTagsSelected(prevState => [...prevState,tagName])
  }   

    
  }

  function handleDetails(id:string) {
    navigate(`/details/${id}`)
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get('/tags')
      
      setTags(response.data)
    }

    fetchTags()
  }, []);  
  
  useEffect(() => {
     async function fetchNotes() {
       const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`)
       setNotes(response.data)
     }
    
     fetchNotes()
   }, [tagsSelected, search]);
  return (
    <Styles.Container>

      <Styles.Brand>

      <h1>Rocketnote</h1>
      </Styles.Brand>

      <Header />

      <Styles.Menu>
     
        <li>
          <ButtonText
              $isactive={tagsSelected.length === 0 }
              title='Todos'
              onClick={() => handleTagsSelected("all")}
          />
        </li>
        {tags && tags.map((tag: any) => {
          return (
            <li key={String(tag.id)}>
              <ButtonText
                title={tag.name}
                onClick={() => handleTagsSelected(tag.name)}
                $isactive={tagsSelected.includes(tag.name)}
              />
            </li>
          )
        })}
      
      </Styles.Menu>

      <Styles.Search>

        <Input
          placeholder="Pesquisar pelo titulo"
          Icon={Icon.FiSearch}
          onChange={e => setSearch(e.target.value)}
        />
     
      </Styles.Search>

      <Styles.Content>
        <Section title='Minhas Notas'>
          {notes && notes.map((note: any) => {
            return (
              <Note
                key={String(note.id)}
                data={note}
                onClick={() => handleDetails(note.id)}
              />
      )
    })   }
           </Section>

      </Styles.Content>

      <Styles.NewNote to='/new'>
         <Icon.FiPlus/> Criar nota

      </Styles.NewNote>
     
    </Styles.Container>
  );
}
