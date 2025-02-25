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
import { Helmet, HelmetProvider } from "react-helmet-async";
import Favicon from '/src/assets/img/Icons/Favicon.png';

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>eLearning Company</title>
        <meta
          name="description"
          content="An online learning services platform offering interactive courses."
          />
          <link rel="icon" type="image/png" href={Favicon} />
      </Helmet>
      <Banner />
      <Header />
      <ScrollLine />
      <ServicesSection />
      <WeDesignSection />
      <InstructionalDesignSection />
      <WorkWeDoSection />
      <TalkToUsSection />
      <Footer />
    </HelmetProvider>
  )
}

export default App;
