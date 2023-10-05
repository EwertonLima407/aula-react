import { createContext } from "react";



export const IUsuarioLogado = () => {

}

interface IUsuarioLogadoContexteData {
  nomeDoUsuario: string;
}

interface IUsuarioLogadoProviderProps {
  children: React.ReactNode
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoContexteData>({} as IUsuarioLogadoContexteData);

export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoProviderProps> = ({ children }) => {
  return (
    <UsuarioLogadoContext.Provider value={{ nomeDoUsuario: 'lucas' }}>
      {children}
    </UsuarioLogadoContext.Provider>
  )
}