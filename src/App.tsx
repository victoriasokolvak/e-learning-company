import './App.scss';
import { Banner } from './components/Banner';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { InstructionalDesignSection } from './components/InstructionalDesignSection';
import { ServicesSection } from './components/ServicesSection';
import { TalkToUsSection } from './components/TalkToUsSection';
import { ScrollLine } from './components/ScrollLine';
import { WeDesignSection } from './components/WeDesignSection';
import { WorkWeDoSection } from './components/WorkWeDoSection';

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
