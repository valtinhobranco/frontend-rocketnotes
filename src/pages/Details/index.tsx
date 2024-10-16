import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

//? components
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tags } from "../../components/Tags";

// ? styles
import { api } from "../../services/api";
import * as Styles from "./styles";


export function Details() {
  const [data, setData] = useState<any>(null)
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`)
      
      setData(response.data)
    }

    fetchNote()
  }, []);
  
  function handleBack() {
    navigate(-1)
  }
 async  function handleRemoveNote() {
    const confirm = window.confirm('Deseja realmente remover esta nota?')
    
    if (confirm) {
      await api.delete(`/notes/${params.id}`)
      navigate(-1)
    }
  }
  return (
    <Styles.Container>
      <Header />
      {data && (

      <main>
         <Styles.Content>
          <ButtonText title="Excluir a nota" onClick={handleRemoveNote} />
          
          <h1>
            {data.title}
          </h1>

          <p>
          {data.description}

          </p>
      <Section title="Links Uteis">
          {data.links && (
                
          <Styles.Links>
              {data.links.map((link: any) => {
                return (
                    <li key={String(link.id)}>
                    <a href={link.url} target="_blank">
                      {link.url}
                    </a>
                    </li>
                )
              }) }
        
         
        </Styles.Links>
      )}
        
      </Section>
      <Section title="Marcadores">
       {data.tags && (
                <Styles.Links>
                  {data.tags.map((tag: any) => {
                    return (
                     
                      <Tags key={String(tag.id)} title={tag.name} />
                    )
                  })}
                  
                   
                   </Styles.Links>   
      )}
  
        
      </Section>
      <Button title="Voltar"  onClick={handleBack}/>
         </Styles.Content>

      </main>
      )}
    
    </Styles.Container>
    
  )
}

 
