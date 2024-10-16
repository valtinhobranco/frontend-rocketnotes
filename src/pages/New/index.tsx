import { api } from "../../services/api";
import {  useNavigate } from "react-router-dom";
// ? components
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";
import { TextArea } from "../../components/TextArea";
// ? styles
import {  useState } from "react";
import * as Styles from "./styles";


export function New() {
   const [title, setTitle] = useState('')
   const [description, setDescription] = useState('')

    const [links, setLinks] = useState<string[]>([])
    const [newLink, setNewLink] = useState<string>('')
    
    const [tags, setTags] = useState<string[]>([])
    const [newTag, setNewTag] = useState<string>('')
    const navigate = useNavigate()

    function handleBack() {
        navigate(-1)
      }
    
    function handleAddLink() {
        
        setLinks(prevState => [...prevState, newLink])
        setNewLink('')
    }
    
    function handleRemoveLink(deleted: any  ) {
        
        setLinks(prevState => prevState.filter(link => link !== deleted))
    }
    
    function handleAddTag() {
        setTags(prevState => [...prevState, newTag])
        setNewTag('')
    }
    
    function handleRemoveTag(deleted: any  ) {
        setTags(prevState => prevState.filter(tag => tag !== deleted))
    }

    async function handleNewNote() {
        if (!title) {
         return  alert('Digite o titulo da nota')
        }
        
        if (newLink) {
            return  alert('Você deixou um link no campo para adicionar, mas não clicou em adicionar.')
          }
       
        if (newTag) {
         return  alert('Você deixou uma tag no campo para adicionar, mas não clicou em adicionar.')
       }
       
        await api.post("/notes", {
            title,
            description,
            tags,
            links

        })
        alert("Nota cadastrada com sucesso")
        navigate('/')
    }
    return (
        <Styles.Container>
        <Header />
        <main>
        
        <Styles.Form>
        <header>
            <h1>Criar nota</h1>
           
            <ButtonText title="Voltar" onClick={handleBack} />
        </header>
        
        <Input 
            placeholder="Título" 
            onChange={e => setTitle(e.target.value)}
        />
        <TextArea 
            placeholder="Observações" 
            onChange={e => setDescription(e.target.value)}
        />
        
        <Section title="Links úteis">
        {links.map((link, index) => {
            return (
                    <NoteItem
                    key={String(index)}
                    value={link}
                    onClick={() => handleRemoveLink(link) }
                    />
                )
            }
        )}
            
         <NoteItem
            $isnew
            placeholder="Novo link"
            value={newLink}
            onChange={e => setNewLink(e.target.value)}
            onClick={handleAddLink}
         />
      </Section>
     <Section title="Marcadores">
            <div className="tags">
                {tags.map((tag, index) => {
                return (
                        <NoteItem
                            key={String(index)}
                            value={tag}
                            onClick={() => handleRemoveTag(tag) }
                        />
                        )
                    }
                )}
            <NoteItem
                $isnew
                placeholder="Nova Tag"
                                onChange={e => setNewTag(e.target.value)}
                                value={newTag}
                onClick={handleAddTag}
            />
        </div>
      </Section>
                <Button  title="Salvar" onClick={handleNewNote}/>
        </Styles.Form>
        </main>
         </Styles.Container>
                );
            }
            