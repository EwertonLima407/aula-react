import { useRef } from "react";
import { NavLink } from "react-router-dom";

import { useUsuarioLogado } from "../../shared/hooks";


export const Dashboard = () => {
  const counterRef = useRef(0)

  const { nomeDoUsuario } = useUsuarioLogado();

  return (
    <div>
      <p>Dashboard</p>
      <p>{nomeDoUsuario}</p>

      <p> Contador: {counterRef.current}</p>

      <button onClick={() => counterRef.current++}>Somar</button>
      <button onClick={() => console.log(counterRef.current)}>Soma</button>

      <NavLink to="/entrar">Login</NavLink>

    </div>

  );
}