import React, { useContext } from 'react';
import { ContextoAutenticacao } from './ContextoAutenticacao';

const UsuarioInfo = () => {
    // Obtem o usuário e a função de logout
    const { usuario, logout } = useContext(ContextoAutenticacao);

    // Se não há usuário logado, exibe uma mensagem
    if (!usuario) {
        return <p>Nenhum usuário está logado.</p>;
    }

    return (
        <div>
            <p>Olá, {usuario.nome}!</p> 
            <button onClick={logout}>Sair</button>
        </div>
    );
};

export default UsuarioInfo;