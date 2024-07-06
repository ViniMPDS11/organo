import './Rodape.css'

const Rodape = (props) => {
    return (
        <div className='Rodape'>
            <div>
                <img src='../../imagens/fb.png' alt='Logo do Facebook'/>
                <img src='../../imagens/tw.png' alt='Logo do Twitter'/>
                <img src='../../imagens/ig.png' alt='Logo do Instagram'/>
            </div>

            <img src='../../imagens/logo.png' alt='Logo da Alura' className='logoAlura'/>

            <p>Desenvolvido por Alura.</p>
        </div>
    )
}

export default Rodape;