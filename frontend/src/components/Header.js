import Menu from './Menu';
import logo from '../assets/logo/icon-left-font-monochrome-white.png'
import { useNavigate } from "react-router-dom"
import MenuP from './MenuP';

function Header() {

    const navigate = useNavigate();

    return (
        <header>
            <div className='entete'>
                <img src={logo} onClick={() => navigate('/')} />
                {localStorage.getItem('userId') ?
                    <MenuP />
                    :
                    <Menu />
                }
            </div>
        </header>

    )
}
export default Header;