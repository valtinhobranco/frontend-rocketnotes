
import { Link } from "react-router-dom";

// ? icons
import * as Icon from "react-icons/fi";

// ? styles
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { useAuth } from "../../hooks/auth";
import * as Styles from "./styles";
import { useState } from "react";




export function SignIn() {
  
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

   const { signIn }: any = useAuth()
   
  function handleSignIn() {
    signIn({email, password})
  }

  return (
    <Styles.Container>

      <Styles.Form>
        <h1>React Notes</h1>
        <p>
          Aplicação para salvar e gerenciar seus links úteis
        </p>
        <h2>
          Faça seu Login
        </h2>

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
        <Button title='Entrar' onClick={handleSignIn} /> 

        <Link to="/register" >Criar Conta</Link>

      </Styles.Form>
      <Styles.Background></Styles.Background>
    </Styles.Container>
  );
}
