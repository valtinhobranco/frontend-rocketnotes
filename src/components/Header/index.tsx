
// ? icons
import * as IconRi from "react-icons/ri";

// ? images
import AvatarPlaceHolder from "../../assets/avatar_placeholder.svg";

// ? styles
import * as Styles from "./styles";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function Header() {
  const { signOut, user }: any = useAuth()

  const navigation = useNavigate()

  function handleSingOut() {

    navigation("/")
    signOut()
  }

  const avatarUrl = user.avatar? `${api.defaults.baseURL}/files/${user.avatar}` : AvatarPlaceHolder
  return (
    <Styles.Container>
      <Styles.Profile to={'/profile'}>
        
        <img src={avatarUrl} alt={`foto do usuário ${user.name}`} />
        <div className="description">
          <span>
            Bem vindo
          </span>
          <strong>{user.name}</strong>
        </div>
      </Styles.Profile>
      
      <Styles.Logout onClick={handleSingOut}>
        <IconRi.RiShutDownLine />
      </Styles.Logout>


     
    </Styles.Container>
  );
}
