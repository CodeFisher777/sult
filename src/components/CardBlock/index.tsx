import '../../scss/cards.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../redux/cart/slice';

type CardBlockProps = {
  title: string;
  price: number;
  imageUrl: string;
  type: number;
  size: string;
  code: number;
  brand: string;
  manufacture: string;
  id: number;
  description: string;
};

export const CardBlock: React.FC<CardBlockProps> = ({
  title,
  price,
  imageUrl,
  id,
  size,
  code,
  brand,
  manufacture,
  description,
}) => {
  const dispatch = useDispatch();
  //@ts-ignore
  const cartItem = useSelector((state) => state.cart.items.find((obj) => obj.id === id));
  const addedCount = cartItem ? cartItem.count : 0;
  const onClickAdd = () => {
    const item = {
      id,
      title,
      price,
      imageUrl,
      size,
      description,
    };
    dispatch(addItem(item));
  };
  return (
    <div className="card-item">
      <div className="card-item-mainimg">
        {' '}
        <img src={imageUrl} alt="" />
      </div>
      <div className="card-item-v">
        <img src="./images/littlebootle.svg" alt="" />
        <p>{size} мл</p>
      </div>
      <div className="card-item-parameters">
        <p>{title}</p>
        <p>
          <span>Штрихкод: </span>
          {code}
        </p>
        <p>
          <span>Производитель: </span>
          {manufacture}
        </p>
        <p>
          <span>Бренд: </span>
          {brand}
        </p>
      </div>
      <div className="card-item-bottom">
        <p>{price} ₸</p>
        <button onClick={onClickAdd}>
          в корзину <img src="./images/cartitem.svg" alt="" />{' '}
          {addedCount > 0 && <i>{addedCount}</i>}
        </button>
      </div>
    </div>
  );
};
