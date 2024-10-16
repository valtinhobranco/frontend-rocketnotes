import { ReactNode, createContext, useContext, useEffect, useState } from "react";

import { api } from "../services/api";

export const AuthContext = createContext({})

interface AuthProviderProps {
  children?: ReactNode;
}

function AuthProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState<any>({})

  //? signIn
  async function signIn({ email, password }: any) {
      
    try {
      const response = await api.post("/sessions", { email, password })
      const { user, token } = response.data

      localStorage.setItem("@rocketnotes:user", JSON.stringify(user))
      localStorage.setItem("@rocketnotes:token", token)
       
      
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`


      setData({user, token})
      
    } catch(error: any ) {
       if (error ) {
        alert(error.response.data.message)
       } else {
        alert("Não foi possível entrar")
       }
    }
   
      
  } 
  
  //? signOut
  function signOut() {
    localStorage.removeItem("@rocketnotes:token")
    localStorage.removeItem("@rocketnotes:user")

    setData({})
  }

  //? updateProfile
  async function updateProfile({ user, avatarFile }: any) {

    try {
      if (avatarFile) {
        const fileUploadForm = new FormData()
        fileUploadForm.append("avatar", avatarFile)

        const response = await api.patch("/users/avatar", fileUploadForm)

        user.avatar = response.data.avatar
       }

      await api.put("/users", user)
      localStorage.setItem("@rocketnotes:user", JSON.stringify(user))

      setData({ user, token: data.token })
      alert('Perfil Atualizado com sucesso!!!')
      
    } catch(error: any ) {
       if (error ) {
        alert(error.response.data.message)
       } else {
        alert("Não foi possível atualizar o Perfil")
       }
    }
    
  }
  
    useEffect(() => {
      const token =  localStorage.getItem("@rocketnotes:token")
      const user = localStorage.getItem("@rocketnotes:user")
      
      if (token && user) {
       
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`
        
        setData({
          token,
          user : JSON.parse(user)
        })

      }
     }, []);
  return (
    <>
      <AuthContext.Provider
        value={
          {
            signIn,
            signOut,
            updateProfile,
            user: data.user
          }
        }>
             {children}
      </AuthContext.Provider>
    </>
  );
 }

function useAuth() {
   const context = useContext(AuthContext)
    return  context
} 

export { AuthProvider, useAuth };

