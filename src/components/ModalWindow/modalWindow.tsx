import styles from './index.module.scss';
import succsesLogo from './succses.svg';
import closeLogo from './close.svg';

type ModalWindowPropsType = {
  active: boolean;
  setActive: (e: boolean) => void;
};

export const ModalWindow: React.FC<ModalWindowPropsType> = ({ active, setActive }) => {
  if (!active) return null;
  return (
    <>
      <div className={styles.overlay} onClick={() => setActive(false)}>
        <div className={styles.box} onClick={(e) => e.stopPropagation()}>
          <div className={styles.closeBTN}>
            <button onClick={() => setActive(false)}>
              <img src={closeLogo} alt="closeLogo" />
            </button>
          </div>
          <div className={styles.logo}>
            <img src={succsesLogo} alt="succsesLogo" />
          </div>
          <div className={styles.title}>Спасибо за заказ</div>
          <div className={styles.description}>Наш менеджер свяжется с вами в ближайшее время</div>
        </div>
      </div>
    </>
  );
};
