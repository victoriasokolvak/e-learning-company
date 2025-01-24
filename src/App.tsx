import './App.scss';
import { Banner } from './components/Banner/Banner';
import { Header } from './components/Header/Header';
import { ServicesSection } from './components/ServicesSection/ServicesSection';
import { WeDesignSection } from './components/WeDesignSection/WeDesignSection';

function App() {
  return (
    <>
      <Banner />
      <Header />
      <ServicesSection />
      <WeDesignSection />
    </>
  )
}

export default App;
