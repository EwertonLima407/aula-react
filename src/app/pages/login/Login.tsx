import { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react"
import { InputLogin } from "./components/InputLogin";
import { ButtonLogin } from "./components/ButtonLogin";
import { UsuarioLogadoContext } from "../../shared/contexts";


export const Login = () => {
  const inputPasswordRef = useRef<HTMLInputElement>(null);

  const { nomeDoUsuario } = useContext(UsuarioLogadoContext);

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (window.confirm('Você é homem?')) {
      console.log('Homem')
    } else {
      console.log('Mulher')

    }

  }, [])

  useEffect(() => {
    console.log(email)
  }, [email])


  useEffect(() => {
    console.log(password)
  }, [password])

  const emailLength = useMemo(() => {
    return email.length * 1000
  }, [email.length]);

  const handleEntrar = useCallback(() => {
    console.log(email)
    console.log(password)

  }, [email, password])

  return (
    <div>
      <form>
        <p>Quantidade de letra de email: {emailLength}   </p>
        <p> {nomeDoUsuario} </p>

        <InputLogin
          label="Email"
          value={email}
          onChange={newValue => setEmail(newValue)}
          onPressEnter={() => inputPasswordRef.current?.focus()} />


        <InputLogin
          type="password"
          label="Senha"
          value={password}
          ref={inputPasswordRef}
          onChange={newValue => setPassword(newValue)} />

        <ButtonLogin type="button" onClick={handleEntrar} >Entrar</ButtonLogin>

        {/*  <ButtonLogin type="button" onClick={handleEntrar} >Cadastre-se</ButtonLogin> */}


      </form>
    </div>
  )
}