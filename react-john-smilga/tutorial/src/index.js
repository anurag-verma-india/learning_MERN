import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const books = [
  {
    author: 'Rebecca Yarros',
    title: 'Iron Flame (The Empyrean, 2)',
    img: './images/book-1.jpg',
  },
  {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81bGKUa1e0L._AC_UL600_SR600,400_.jpg',
  },
];

const names = ['john', 'peter', 'susan'];

const BookList = () => {
  return (
    <section className="booklist">
      {names.map((name) => {
        return <h1>{name}</h1>;
      })}
    </section>
  );
};

const Book = (props) => {
  console.log(props);
  const { title, author, img } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
