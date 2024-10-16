import { useState } from "react";

//? Auth
import { useAuth } from "../../hooks/auth";

// ? icons
import * as Icon from "react-icons/fi";

// ? images
import AvatarPlaceHolder from "../../assets/avatar_placeholder.svg";

// ? styles
import {  useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import * as Styles from "./styles";
import { api } from "../../services/api";



export function Profile() {
  const { user, updateProfile }: any = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState('')
  const [passwordNew, setPasswordNew] = useState('')

  const avatarUrl = user.avatar? `${api.defaults.baseURL}/files/${user.avatar}` : AvatarPlaceHolder
  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)

  const navigate = useNavigate()

    function handleBack() {
        navigate(-1)
      }

async function handleUpdate() {
  const updated = {
    name,
    email,
    password: passwordNew,
    oldPassword: passwordOld,
  }

  const userUpdated = Object.assign( user, updated)
  
  await updateProfile({user: userUpdated, avatarFile})
}
  
  function handleChangeAvatar(event: any) {
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  
  return (
    <Styles.Container>
     
      <header>
        
        
        <button  onClick={handleBack} type="button">
          <Icon.FiArrowLeft />
        </button>
      </header>

      <Styles.Form>
        <Styles.Avatar>
          <img src={avatar} alt={`foto do usuário ${user.name}`} />
          

          <label htmlFor="avatar">
          <Icon.FiCamera />
            <input
              type="file"
              id='avatar'
              onChange={handleChangeAvatar}
            />
          </label>
        </Styles.Avatar>

      <Input
          placeholder='Nome'
          type='text'
          Icon={Icon.FiUser}
          value={name}
          onChange={e => setName(e.target.value)}
        />
         <Input
          placeholder='E-mail'
          type='text'
          Icon={Icon.FiMail}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          placeholder='Senha atual'
          type='password'
          Icon={Icon.FiLock}
          onChange={e => setPasswordOld(e.target.value)}
        />
        <Input
          placeholder='nova Senha'
          type='password'
          Icon={Icon.FiLock}
          onChange={e => setPasswordNew(e.target.value)}
        />

      <Button title='Salvar' onClick={handleUpdate} /> 
      </Styles.Form>


      
    </Styles.Container>
  );
}
