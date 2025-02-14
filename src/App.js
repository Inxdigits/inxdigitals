import './App.css';
import ContactUs from './Components/Contact-us/Contact-us';
import Cta from './Components/Cta/Cta';
import Footer from './Components/Footer/Footer';
import Testimonials from './Components/Testimonials/Testimonials';

function App() {
  return (
    <div className="App">
      <h1>inx digitals web app</h1>
      <Cta />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
