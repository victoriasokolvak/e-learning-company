import './App.scss';
import { Banner } from './components/Banner/Banner';
import { Header } from './components/Header/Header';
import { InstructionalDesignSection } from './components/InstructionalDesignSection/InstructionalDesignSection';
import { ServicesSection } from './components/ServicesSection/ServicesSection';
import { WeDesignSection } from './components/WeDesignSection/WeDesignSection';

function App() {
  return (
    <>
      <Banner />
      <Header />
      <ServicesSection />
      <WeDesignSection />
      <InstructionalDesignSection />
    </>
  )
}

export default App;
