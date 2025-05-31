import fb from 'imagens/fb.png';
import tw from 'imagens/tw.png';
import ig from 'imagens/ig.png';
import logo from 'imagens/logo.png';

import './Rodape.css'

const Rodape = (props) => {
    return (
        <div className='Rodape'>
            <div>
                <img src={fb} alt='Logo do Facebook'/>
                <img src={tw} alt='Logo do Twitter'/>
                <img src={ig} alt='Logo do Instagram'/>
            </div>

            <img src={logo} alt='Logo da Alura' className='logoAlura'/>

            <p>Desenvolvido por Alura.</p>
        </div>
    )
}

export default Rodape;