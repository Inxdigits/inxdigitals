import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
// import Hero_gradient from './Components/Hero_gradient/Hero_gradient'
import Our_service from './Components/Ourservices/Our_service'
import DataCount from './Components/DataCount/DataCount'
import AboutUs from './Components/AboutUs/AboutUs'
import WhyChoseUs from './Components/WhyChoseUs/WhyChoseUs'
import ContactUs from './Components/Contact-us/Contact-us';
import Cta from './Components/Cta/Cta';
import Footer from './Components/Footer/Footer';
import Testimonials from './Components/Testimonials/Testimonials';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div style={{ marginTop: "80px" }}> {/* Content below navbar */}</div>
      <Hero/>
      {/* <Hero_gradient/> */}
      <Our_service/>
      <DataCount/>
      <AboutUs/>
      <WhyChoseUs/>
      <Cta />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
