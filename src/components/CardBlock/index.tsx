import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../redux/cart/slice';
import { selectCartItemById } from '../../redux/cart/slice';
import { CartItem } from '../../redux/cart/types';

type CardBlockProps = {
  title: string;
  price: number;
  imageUrl: string;
  type: number;
  size: number;
  code: number;
  brand: string;
  manufacture: string;
  id: string;
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
  const cartItem = useSelector(selectCartItemById(id));
  const addedCount = cartItem ? cartItem.count : 0;
  const onClickAdd = () => {
    const item: CartItem = {
      id,
      title,
      price,
      imageUrl,
      size,
      description,
      count: 0,
      itemCount: 0,
    };
    dispatch(addItem(item));
  };
  return (
    <div className="card-item">
      <Link to={`/card/${id}`}>
        <div className="card-item-mainimg">
          {' '}
          <img src={imageUrl} alt="" />
        </div>
      </Link>
      <div className="card-item-v">
        <img src="./images/littlebootle.svg" alt="" />
        <p>{size} мл</p>
      </div>
      <div className="card-item-parameters">
        <Link to={`/card/${id}`}>
          <p>{title}</p>
        </Link>
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
