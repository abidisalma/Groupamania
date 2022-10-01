import '../assets/css/globale.scss'
import Content from '../components/Content';
import Header from '../components/Header';
import logo from '../assets/logo/icon-left-font-monochrome-white.png'

function HomePage() {
  
  return (
    <div className="App">
      
      <Header />

      <Content />

      <footer>
        <img src={logo} />
      </footer>

    </div>
  );
}

export default HomePage;
