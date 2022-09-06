import './bootstrap.css'
 import './gaia.css'


 
import Navbar from './component/Navbar';
import Header from './component/Header';
import Service from './component/Service';
import Details from './component/Details';
import Client from './component/Client';
import Contect from './component/Contect';
import Footer from './component/Footer';



function App() {




  return (
    <div className="App">
  <Navbar/>
    <Header/>
    <Service/>
    <Details/>
    <Client/>
    <Contect/>
    <Footer/>
    </div>

  );
}

export default App;
