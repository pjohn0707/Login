import React, { useState, useContext } from 'react';
import { ContextoAutenticacao } from './ContextoAutenticacao';

const Login = () => {
    // Estado local para armazenar o nome e a senha do usuário
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');

    // Obtemos a função de login
    const { login } = useContext(ContextoAutenticacao);

    // Função chamada ao clicar no botão de login
    const clicarLogin = () => {
        login(nome, senha);
    };

    return (
        <div>
            <h2>Login</h2>
            <input type="text" placeholder="Digite seu nome" value={nome} onChange={(e) => setNome(e.target.value)} />
            <input type="password" placeholder="Digite sua senha" value={senha} onChange={(e) => setSenha(e.target.value)}  />
            <button onClick={clicarLogin}>Entrar</button>
        </div>
    );
};

export default Login;