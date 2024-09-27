'use client'

import { createContext, useContext, useState } from "react";

const ColorContext = createContext(); //permite compartilhar dados entre components sem passar props

export const useColor = () => {
  return useContext(ColorContext); // useContext acessa os dados fornecidos pelo context facilitando compartilhamento
};

export const ColorProvider = ({ children }) => {
  const [color, setColor] = useState('#FF0000');
  return (
    <ColorContext.Provider value={{ color, setColor }}>
      {children}
    </ColorContext.Provider>
  );
};

/**
 * <ColorContext.Provider value={{color, setColor}}>  permite que seus filhos acessem e modifiquem valores
 *       {children}                                   neste caso a color
 *  </ColorContext.Provider>
 */

/**
 * createContext:
 *
 *   Essa função cria um objeto de contexto que armazena valores que podem ser compartilhados entre componentes de forma hierárquica.
 *   No exemplo, ColorContext foi criado para manter as informações da cor e sua função de atualização, possibilitando que qualquer componente dentro de ColorProvider acesse essas informações.
 *  
 * useContext:
 *
 *  Esse hook permite que um componente consuma o valor fornecido pelo contexto, eliminando a necessidade de passar props através de vários níveis de componentes.
 *  O hook useColor facilita o acesso ao valor do ColorContext diretamente, simplificando o consumo do contexto nos componentes filhos.
 */
