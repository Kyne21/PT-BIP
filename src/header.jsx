import logo from './logo.png'
import './header.css'


function Header(){
    return(
        <div className='container'>
            <img src={logo} alt='Logo' className='logo'/>
            <div className='text-container'>
                <h2>PT Sinergi Gula Nusantara</h2>
                <p>Pabrik Gula Tjoekir</p>
            </div>
        </div>
    );
}

export default Header
