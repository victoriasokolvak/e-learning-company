import styles from './OccupationFilter.module.scss';
import close from '/src/assets/img/Icons/Close.svg';
import { occupations } from '../../constants/occupations';

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
      <span className={styles.title}>Occupation</span>
        <div
          className={styles.control}
          onClick={() => setIsOccupationOpen(!isOccupationOpen)}
        >

        {!isOccupationOpen && (
          <div className={styles.occupation}>
            {selectedOccupation}
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
          </div>
        )}
        </div>

        {isOccupationOpen && (
          <img
            src={close}
            alt="Close button"
            className={styles.close}
            onClick={() => setIsOccupationOpen(false)}
          />
        )}
    </div>
  );
};
