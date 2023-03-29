import styles from './index.module.scss';
import succses from '../../assets/images/succses.svg';
import close from '../../assets/images/close.svg';

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
              <img src={close} alt="close" />
            </button>
          </div>
          <div className={styles.logo}>
            <img src={succses} alt="succses" />
          </div>
          <div className={styles.title}>Спасибо за заказ</div>
          <div className={styles.description}>Наш менеджер свяжется с вами в ближайшее время</div>
        </div>
      </div>
    </>
  );
};
