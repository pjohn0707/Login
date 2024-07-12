import React, { createContext, useState } from 'react';

// Cria um contexto para a autenticação
export const ContextoAutenticacao = createContext();

// Componente provedor que envolverá a aplicação para compartilhar o estado de autenticação
export const ProvedorAutenticacao = ({ children }) => {
    const [usuario, setUsuario] = useState(null);

    const login = (nome, senha) => {
        setUsuario({ nome, senha });
    };

    const logout = () => {
        setUsuario(null);
    };

    return (
        <ContextoAutenticacao.Provider value={{ usuario, login, logout }}>
            {children}
        </ContextoAutenticacao.Provider>
    );
};