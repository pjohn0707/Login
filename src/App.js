import './App.css';
import { ProvedorAutenticacao } from './Components/ContextoAutenticacao';
import Login from './Components/Login';
import UsuarioInfo from './Components/UsuarioInfo';

const App = () => {
  return (
    <ProvedorAutenticacao>
      <div>
        <h1>Usuário</h1>
        <UsuarioInfo /> 
        <Login />
      </div>
    </ProvedorAutenticacao>
  );
};

export default App;