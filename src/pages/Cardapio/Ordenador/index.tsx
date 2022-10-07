import styles from "./Ordenador.module.scss";
import opcoes from "./opcoes.json";
import React, { useState } from "react";
import classNames from "classnames";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

interface Props { 
  ordenador: string,
  setOrdenador: React.Dispatch<React.SetStateAction<string>>
}

export default function Ordenador({
  ordenador,
  setOrdenador
}: Props) {
  const [aberto, setAberto] = useState(false);
  const nomeOrdenador = ordenador && opcoes.find(opcao => opcao.value === ordenador)?.nome;
  return (
    <button
      className={classNames({
        [styles.ordenador]: true,
        [styles["ordenador--ativo"]]: ordenador !== ""
      })}
      onClick={() => setAberto(!aberto)}  
      onBlur={() => setAberto(false)} 
    >{/* Mudando o estado de aberto para fechado */}
     {/* Clicando fora fecha o icone */}
      <span>{nomeOrdenador || "Ordenar Por"}</span>
      {aberto ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} /> } {/*Icone aberto ou fechado */}
      <div className={classNames({
        [styles.ordenador__options]: true,
        [styles['ordenador__options--ativo']]: aberto
      })}>
        {opcoes.map(opcao => (
          <div className={styles.ordenador__option} key={opcao.value} onClick={() => setOrdenador(opcao.value)}>
            {opcao.nome}
          </div>
        ))}
      </div>
    </button>
  )
}