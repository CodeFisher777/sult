import React from 'react';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { Navigate, useNavigate, useParams, Link } from 'react-router-dom';
import 'easymde/dist/easymde.min.css';
import styles from './AddItem.module.scss';

export const AddItem = () => {
  const categories = [
    'Уход за телом',
    'Уход за руками',
    'Уход за ногами',
    'Уход за лицом',
    'Уход за волосами',
    'Средство для загара',
    'Средство для бритья',
    'Подарочные наборы',
    'Гигиеническая продукция',
    'Гигиена полости рта',
    'Бумажная продукция',
  ];

  const navigate = useNavigate();
  const { id } = useParams();
  const [isLoading, setIsLoading] = React.useState(false);
  const [imageUrl, setImageUrl] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [_type, set_Type] = React.useState('');
  const [_size, set_Size] = React.useState('');
  const [_code, set_Code] = React.useState('');
  const [brand, setBrand] = React.useState('');
  const [manufacture, setManufacture] = React.useState('');
  const [_price, set_Price] = React.useState('');

  const [typeOfCare, setTypeOfCare] = React.useState('');
  const [selState, setSelState] = React.useState(categories[0]);
  const [description, setDescription] = React.useState('');
  const [arr, setArr] = React.useState<string[]>([]);
  const isEditing = Boolean(id);

  const onSubmit = async () => {
    try {
      setIsLoading(true);
      const price = Number(_price);
      const type = Number(_type);
      const size = Number(_size);
      const code = Number(_code);
      const category = arr.join(',');

      const fields = {
        title,
        imageUrl,
        type,
        price,
        size,
        category,
        code,
        brand,
        manufacture,
        description,
      };
      //@ts-ignore
      const { data } = isEditing
        ? await axios.put(`https://641e8eecad55ae01ccabd4a2.mockapi.io/items/${id}`, fields)
        : axios.post('https://641e8eecad55ae01ccabd4a2.mockapi.io/items', fields);
      const _id = isEditing ? id : data.id;
      navigate(`/card/${_id}`);
    } catch (err) {
      console.warn(err);
      alert('Ошибка при  создании продукта');
    }
  };
  React.useEffect(() => {
    if (id) {
      axios
        .get(`https://641e8eecad55ae01ccabd4a2.mockapi.io/items/${id}`)
        .then(({ data }) => {
          setTitle(data.title);
          setImageUrl(data.imageUrl);
          setTypeOfCare(data.category);
          set_Type(String(data.type));
          set_Size(String(data.size));
          set_Code(String(data.code));
          setBrand(data.brand);
          setManufacture(data.manufacture);
          set_Price(String(data.price));
          setDescription(data.description);
        })

        .catch((err) => {
          console.warn(err);
          alert('Ошибка при получении продукта на редактирование');
        });
    }
  }, []);

  const onClickAdd = () => {
    //@ts-ignore
    setArr([...arr, selState]);
  };
  const cat = arr.join(',');
  console.log(cat);
  return (
    <Paper style={{ padding: 30 }}>
      <TextField
        classes={{ root: styles.title }}
        variant="standard"
        placeholder="Название продукта"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
      />

      <TextField
        classes={{ root: styles.tags }}
        variant="standard"
        placeholder="Ссылка на картинку"
        fullWidth
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <TextField
        classes={{ root: styles.tags }}
        variant="standard"
        placeholder="Категории"
        fullWidth
        value={typeOfCare}
        onChange={(e) => setTypeOfCare(e.target.value)}
      />

      <TextField
        classes={{ root: styles.tags }}
        variant="standard"
        placeholder="Тип"
        fullWidth
        value={_type}
        onChange={(e) => set_Type(e.target.value)}
      />
      <TextField
        classes={{ root: styles.tags }}
        variant="standard"
        placeholder="Размер"
        fullWidth
        value={_size}
        onChange={(e) => set_Size(e.target.value)}
      />
      <TextField
        classes={{ root: styles.tags }}
        variant="standard"
        placeholder="Код"
        fullWidth
        value={_code}
        onChange={(e) => set_Code(e.target.value)}
      />
      <TextField
        classes={{ root: styles.tags }}
        variant="standard"
        placeholder="Брэнд"
        fullWidth
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
      />
      <TextField
        classes={{ root: styles.tags }}
        variant="standard"
        placeholder="Производитель"
        fullWidth
        value={manufacture}
        onChange={(e) => setManufacture(e.target.value)}
      />
      <TextField
        classes={{ root: styles.tags }}
        variant="standard"
        placeholder="Цена"
        fullWidth
        value={_price}
        onChange={(e) => set_Price(e.target.value)}
      />
      <TextField
        classes={{ root: styles.tags }}
        variant="standard"
        placeholder="Описание"
        fullWidth
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div>{arr.join(',')}</div>
      <div className={styles.buttons}>
        <select
          onChange={(e) => setSelState(e.target.value)}
          className={styles.select}
          name="selectedCategory"
          value={selState}
        >
          {categories.map((categoryName, i) => (
            <option key={i} value={categoryName}>
              {categoryName}
            </option>
          ))}
        </select>
        <button onClick={onClickAdd}> Добавить тип</button>
      </div>
      <div className={styles.buttons}>
        <button onClick={onSubmit}>{isEditing ? 'Сохранить' : 'Добавить'}</button>
        <Link to="/">
          <button>Отмена</button>
        </Link>
      </div>
    </Paper>
  );
};
