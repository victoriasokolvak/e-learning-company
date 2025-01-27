import styles from './OccupationFilter.module.scss';
import { occupations } from '../../constants/occupations';
import { Close } from '../ui/Close';
import { Arrow } from '../ui/Arrow';

type OccupationFilterProps = {
  selectedOccupation: string;
  isOccupationOpen: boolean;
  setIsOccupationOpen: (isOpen: boolean) => void;
  setSelectedOccupation: (occupation: string) => void;
};

export const OccupationFilter: React.FC<OccupationFilterProps> = ({
  selectedOccupation,
  isOccupationOpen,
  setIsOccupationOpen,
  setSelectedOccupation,
}) => {
  return (
    <div className={styles.filter}>
      <h4 className={styles.title}>Occupation</h4>
      <div className={styles.wrapper}>
        {!isOccupationOpen && (
          <div className={styles.wrapper__close}>
            <div
              className={styles.occupation}
              onClick={() => setIsOccupationOpen(true)}
            >
              {selectedOccupation}
            </div>
            <div
              className={styles.arrow}
              onClick={() => setIsOccupationOpen(true)}
            >
              <Arrow />
            </div>
          </div>
        )}

        {isOccupationOpen && (
          <div className={styles.dropdown}>
            {occupations.map((occ) => (
              <div
                key={occ}
                className={styles.occupation}
                onClick={() => {
                  setSelectedOccupation(occ);
                  setIsOccupationOpen(false);
                }}
              >
                {occ}
              </div>
            ))}
            <div
              className={styles.close}
              onClick={() => setIsOccupationOpen(false)}
            >
              <Close />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
