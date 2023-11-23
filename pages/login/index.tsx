import ButtonEntrar from './components/ButtonLogin'


export default function Login(){

  return (
    <>
    <body>
      
      <div>
        <h2>Login</h2>
        
        <hr />
        <InputEmail type='' placeholder='Email' />
        <InputSenha type='password' placeholder='Senha'/>
        <hr />
        <ButtonEntrar to='home' type='submit' label='ENTRAR' />
        <ButtonEntrar to='cadastro-pessoa' type='submit' label='CADASTRE-SE' />  
      </div>
      
    </body>
    </>
  )
}
