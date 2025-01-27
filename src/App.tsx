import './App.scss';
import { Banner } from './components/Banner/Banner';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { InstructionalDesignSection } from './components/InstructionalDesignSection/InstructionalDesignSection';
import { ServicesSection } from './components/ServicesSection/ServicesSection';
import { TalkToUsSection } from './components/TalkToUsSection/TalkToUsSection';
import { ScrollLine } from './components/ScrollLine/ScrollLine';
import { WeDesignSection } from './components/WeDesignSection/WeDesignSection';
import { WorkWeDoSection } from './components/WorkWeDoSection/WorkWeDoSection';

function App() {
  return (
    <>
      <Banner />
      <Header />
      <ScrollLine />
      <ServicesSection />
      <WeDesignSection />
      <InstructionalDesignSection />
      <WorkWeDoSection />
      <TalkToUsSection />
      <Footer />
    </>
  )
}

export default App;
