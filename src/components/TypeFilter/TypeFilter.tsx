import styles from './TypeFilter.module.scss';
import arrow from '/src/assets/img/Icons/Arrow.svg';
import close from '/src/assets/img/Icons/Close.svg';
import { getSegmentedControlStyles } from '../../utils/typeToggleStyles';
import { getTypeStyles } from '../../utils/typeToggleStyles';

type TypeFilterProps = {
  isTypeOpen: boolean;
  selectedType: number | null;
  setIsTypeOpen: (isOpen: boolean) => void;
  setSelectedType: (id: number | null) => void;
  types: { id: number; color: string; border?: string }[];
};

export const TypeFilter: React.FC<TypeFilterProps> = ({
  isTypeOpen,
  selectedType,
  setIsTypeOpen,
  setSelectedType,
  types
}) => {
  return (
    <div className={styles.filter}>
      <span className={styles.title}>Type</span>
      <div
        className={styles.segmented_control}
        onClick={() => setIsTypeOpen(!isTypeOpen)}
        style={getSegmentedControlStyles(isTypeOpen, selectedType, types)}
      >

      {!isTypeOpen && (
        <>
          <div className={styles.circle}/>
          <img src={arrow} alt="arrow" className={styles.arrow}/>
        </>
      )}

      {isTypeOpen && (
        <div className={styles.dropdown}>
          {types.map((type) => (
            <div
              key={type.id}
              className={styles.circle}
              style={getTypeStyles(type)}
              onClick={() => {
                setSelectedType(type.id);
                setIsTypeOpen(false);
              }}
            />
          ))}
        </div>
      )}
      </div>

      {isTypeOpen && (
        <img
          src={close}
          alt="Close button"
          className={styles.close}
          onClick={() => setIsTypeOpen(false)}
        />
      )}
    </div>
  );
};
