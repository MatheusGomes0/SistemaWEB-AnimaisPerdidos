import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home'
import NotFound from '../pages/not-found'
import CadastroPessoa from '../pages/cadastro-pessoa'
import Sobre from '../pages/sobre'
import CadastroAnimal from '../pages/cadastro-animal'
import Perdidos from '../pages/perdidos'
  
const router = createBrowserRouter([
{path: '/', element: <Home />, errorElement: <NotFound />},
{path: '/sobre', element: <Sobre />},
{path: '/cadastro-pessoa', element: <CadastroPessoa />},
{path: '/cadastro-animal', element: <CadastroAnimal />}
{path: '/perdidos', element: <Perdidos />}
])

export default router