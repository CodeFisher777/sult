import React from 'react';
import style from './Breadcrumbs.module.scss';
import { useNavigate } from 'react-router-dom';

interface link {
  title: string;
  link?: string;
}

interface IBreadcrumbsProps {
  links: link[];
}

export const Breadcrumbs: React.FC<IBreadcrumbsProps> = ({ links }) => {
  const navigate = useNavigate();

  const navigateTo = (url?: string): void => {
    if (!url) return;
    navigate(url);
  };

  return (
    <div className={style.root}>
      <span className={style.main} onClick={() => navigate('/')}>
        Главная
      </span>
      {links.map((e) => (
        <span onClick={() => navigateTo(e.link)} key={e.title}>
          {e.title}
        </span>
      ))}
    </div>
  );
};
