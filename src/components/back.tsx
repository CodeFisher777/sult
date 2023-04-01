import arrowLeft from './../assets/images/mobilearrowleft.svg';

export const Back: React.FC = () => {
  return (
    <div className="namem-back">
      <button>
        <img src={arrowLeft} alt="" />
      </button>
      <p>Назад</p>
    </div>
  );
};
