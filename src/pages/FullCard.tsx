import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FullcardItem } from '../components/FullCardItem/FullcardItem';

import axios from 'axios';

export const FullCard: React.FC = () => {
  const [card, setCard] = React.useState<{
    id: string;
    imageUrl: string;
    title: string;
    size: number;
    price: number;
    brand: string;
    manufacture: string;
    code: number;
    descrition: string;
  }>();
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchCard() {
      try {
        const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/items/` + id);
        setCard(data);
      } catch (error) {
        alert('Ошибка при получении товара');
      }
    }
    fetchCard();
  }, []);
  if (!card) {
    return <>Загрузка...</>;
  }
  return (
    <div className="container">
      <FullcardItem card={card} />
    </div>
  );
};
