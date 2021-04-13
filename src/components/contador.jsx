import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Contador() {
  const contador = useSelector((state) => state.numero);
  const dispatch = useDispatch();
  return (
    <>
      <header class="header"> Programación Web FullStack - UTN</header>
      <h1 class="h1">amo a mi govia</h1>
      <h3 class="h3">{contador}</h3>
      <>
        <button class="button" onClick={() => dispatch({ type: 'INCREMENTAR' })}>+</button>
        <button class="button" onClick={() => dispatch({ type: 'DECREMENTAR' })}>-</button>
        <button class="button" onClick={() => dispatch({ type: 'RESET' })}>Volver a 0</button>
      </>
    </>
  );
}

