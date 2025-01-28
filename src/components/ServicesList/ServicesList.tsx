import React from 'react';
import styles from './ServicesList.module.scss';
import { services } from '../../constants/servicesData';
import { getBgStyles, getIconColor, getLineColor } from '../../utils/typeServiceStyles';
import { ServiceMessages } from '../../constants/messages';

type ServicesListProps = {
  filteredServices: typeof services; 
  selectedType: number | null;
  types: { id: number; color: string; border?: string }[];
};

export const ServiceList: React.FC<ServicesListProps> = ({
  filteredServices,
  selectedType,
  types
}) => {
  const splitTitle = (title: string) => {
    return title.split(' ').map((word, index) => (
      <span key={index} className={index === 1 ? styles.second_word : ''}>
        {word}
      </span>
    ));
  };

  return (
    <div className={styles.container}>
      {filteredServices.length > 0 ? (
        filteredServices.map((service, index) => (
          <div key={index} className={styles.card}>
            <div
              className={styles.img_wrapper}
              style={getBgStyles(selectedType, types)}
            >
              {React.createElement(service.imageComponent, {
                borderColor: getIconColor(selectedType, types),
              })}
            </div>

            <h3 className={styles.title}>{splitTitle(service.title)}</h3>

            <div
              className={styles.line}
              style={{ borderColor: getLineColor(selectedType, types) }}
            ></div>

            <p className={styles.description}>{service.description}</p>
          </div>
        ))
      ) : (
        <div className={styles.no_results}>
          {ServiceMessages.NoServicesFound}
        </div>
      )}
    </div>
  );
};
