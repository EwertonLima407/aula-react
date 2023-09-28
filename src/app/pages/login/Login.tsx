import { useCallback, useEffect, useMemo, useRef, useState } from "react"


export const Login = () => {
  const inputPasswordRef = useRef<HTMLInputElement>(null);

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
        <label>
          <span>Email</span>
          <input value={email} onChange={e => setEmail(e.target.value)}
            onKeyDown={e => e.key === 'Enter' ? inputPasswordRef.current?.focus() : undefined} />
        </label>

        <label>
          <span>Senha</span>
          <input type="password" ref={inputPasswordRef} value={password} onChange={e => setPassword(e.target.value)} />
        </label>

        <button type="button" onClick={handleEntrar}>
          Entrar
        </button>
      </form>
    </div>
  )
}