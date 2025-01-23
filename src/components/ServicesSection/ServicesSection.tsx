import { useState } from 'react';
import styles from './ServicesSection.module.scss';
import { services } from '../../constants/servicesData';
import { Search } from '../Search/Search';
import { TypeFilter } from '../TypeFilter/TypeFilter';
import { OccupationFilter } from '../OccupationFilter/OccupationFilter';
import { ServiceList } from '../ServicesList/ServicesList';
import { types } from '../../constants/colorTypes';

export const ServicesSection = () => {
  const [search, setSearch] = useState("");
  const [isTypeOpen, setIsTypeOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<number | null>(null);
  const [selectedOccupation, setSelectedOccupation] = useState("All");
  const [isOccupationOpen, setIsOccupationOpen] = useState(false);

  const filteredServices = services.filter((service) => {
    const matchesSearch =
      service.title.toLowerCase().includes(search.toLowerCase()) ||
      service.description.toLowerCase().includes(search.toLowerCase());
  
    const matchesOccupation =
      selectedOccupation.toUpperCase() === "ALL" || 
      service.title.toUpperCase() === selectedOccupation.toUpperCase();
  
    return matchesSearch && matchesOccupation;
  });

  return (
    <section className={styles.services}>
      <div className={styles.wrapper}>
      <h2 className={styles.title}>Services We Provide</h2>

      <div className={styles.filters}>
        <Search search={search} setSearch={setSearch} />

        <TypeFilter
            isTypeOpen={isTypeOpen}
            selectedType={selectedType}
            setIsTypeOpen={setIsTypeOpen}
            setSelectedType={setSelectedType}
            types={types}
          />

        <OccupationFilter
            selectedOccupation={selectedOccupation}
            isOccupationOpen={isOccupationOpen}
            setIsOccupationOpen={setIsOccupationOpen}
            setSelectedOccupation={setSelectedOccupation}
          />
        </div>

        <ServiceList
          filteredServices={filteredServices} 
          selectedType={selectedType} 
          types={types} 
        />
      </div>
    </section>
  );
};
