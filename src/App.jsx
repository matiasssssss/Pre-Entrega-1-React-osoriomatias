import React from 'react';
import NavBarra from './Componentes/NavBarra/NavBarra';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';




const App = () => {
  return (
    <>
      <NavBarra />
      <ItemListContainer saludo={"saludo para todos"} />
    </>
  )
}

export default App