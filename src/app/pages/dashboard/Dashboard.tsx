import { useRef } from "react";
import { NavLink } from "react-router-dom";

import { useUsuarioLogado } from "../../shared/hooks";


export const Dashboard = () => {
  const counterRef = useRef(0)

  const { nomeDoUsuario, logout } = useUsuarioLogado();

  return (
    <div>
      <p>Dashboard</p>
      <p>{nomeDoUsuario}</p>

      <p> Contador: {counterRef.current}</p>

      <button onClick={() => counterRef.current++}>Somar</button>
      <button onClick={() => console.log(counterRef.current)}>Soma</button>

      <button onClick={logout}>Logout</button>

      <NavLink to="/entrar">Login</NavLink>

    </div>

  );
}