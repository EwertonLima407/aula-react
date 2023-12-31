import { createContext, useCallback, useEffect, useState } from "react";



export const IUsuarioLogado = () => {

}

interface IUsuarioLogadoContexteData {
  nomeDoUsuario: string;
  logout: () => void;
}

interface IUsuarioLogadoProviderProps {
  children: React.ReactNode
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoContexteData>({} as IUsuarioLogadoContexteData);

export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoProviderProps> = ({ children }) => {
  const [nome, setNome] = useState('')

  useEffect(() => {
    setTimeout(() => {
      setNome('Pedro')
    }, 300)
  })

  const handleLogout = useCallback(() => {
    console.log('logout')
  }, [])

  return (
    <UsuarioLogadoContext.Provider value={{ nomeDoUsuario: nome, logout: handleLogout }}>
      {children}
    </UsuarioLogadoContext.Provider>
  )
}