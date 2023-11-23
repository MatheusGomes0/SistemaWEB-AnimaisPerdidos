import Topo from "../../components/Topo"
import ButtonEntrar from './components/ButtonLogin'

export default function Produtos(){
    return(
        <>
            <Topo />
            <ButtonEntrar to='home' type='submit' label='ENTRAR' />
        </>
    )
}