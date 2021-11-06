import './assets/css/bootstrap.min.css';
import './assets/css/sass/main.scss';


import MasterLayout from './components/layout/MasterLayout';
import Slider from './components/feacher/slider'
import Quote from './components/feacher/quote';
import Media from './components/feacher/media';
import Footer from './components/layout/Footer';
import Shop from './components/feacher/shop/Shop';
import Article from './components/feacher/Article';
import Subscribe from './components/feacher/Subscribe';
import Contacts from './components/feacher/Contacts';

function App() {
  return (
    <div className="App">
      <MasterLayout>
        <Slider />
        <Quote />
        <Media />
        <Shop />
        <Article />
        <Subscribe />
        <Contacts />
        <Footer />
      </MasterLayout>
    </div>
  );
}

export default App;
