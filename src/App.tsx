import './App.scss';
import { Banner } from './components/Banner/Banner';
import { Header } from './components/Header/Header';
import { InstructionalDesignSection } from './components/InstructionalDesignSection/InstructionalDesignSection';
import { ServicesSection } from './components/ServicesSection/ServicesSection';
import { WeDesignSection } from './components/WeDesignSection/WeDesignSection';
import { WorkWeDoSection } from './components/WorkWeDoSection/WorkWeDoSection';

function App() {
  return (
    <>
      <Banner />
      <Header />
      <ServicesSection />
      <WeDesignSection />
      <InstructionalDesignSection />
      <WorkWeDoSection />
    </>
  )
}

export default App;
