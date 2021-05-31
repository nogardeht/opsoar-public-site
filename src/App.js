import logo from './IMG/opsoar_orange.png';
import './App.css';
import Hero from './Components/Hero/Hero';
import Social from './Components/Social/Social'

const ContactUs = () => <div>Contacto</div>;
const Footer = () => <div>Footer</div>;

function App() {
  return (
    <>
      <Hero logo={logo} />
      <Social/>
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
