import logo from 'imagens/banner.png';
import './Banner.css';

function Banner() {
    return (
        <header className="banner">
            <img src={logo} alt="O banner principal do Organo"/>
        </header>
    )
}

export default Banner;