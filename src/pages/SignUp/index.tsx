
// ? icons
import * as Icon from "react-icons/fi";

// ? styles
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { api } from "../../services/api";
import * as Styles from "./styles";



export function SignUp() {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  
  const navigate = useNavigate()
  
  const handleSignUp = () => {
    
    api.post("/users", { name, email, password })
    .then(() => {
      alert('Usuario Cadastrado com Sucesso')
      navigate(-1)
    })
    .catch(error => {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível cadastrar")
      }
    })
    
    
  }
  
  return (
    <Styles.Container>
    <Styles.Background />
    <Styles.Form>
    <h1>React Notes</h1>
    <p>
    Aplicação para salvar e gerenciar seus links úteis
    </p>
    <h2>
    Crie seu conta
    </h2>
    
    
    <Input
    placeholder='Nome'
    type='text'
    Icon={Icon.FiUser}
    onChange={e => setName(e.target.value)}
    />
    <Input
    placeholder='E-mail'
    type='text'
    Icon={Icon.FiMail}
    onChange={e => setEmail(e.target.value)}
    />
    <Input
    placeholder='Senha'
    type='password'
    Icon={Icon.FiLock}
    onChange={e => setPassword(e.target.value)}
    />
    <Button title='Cadastrar' onClick={handleSignUp} /> 
    
    
    <Link to="/" >Voltar para o login</Link>
    
    </Styles.Form>
    </Styles.Container>
    );
  }
  