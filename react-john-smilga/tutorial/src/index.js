import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const author = 'Rebecca Yarros';
const title = 'Iron Flame (The Empyrean, 2)';
const img = './images/book-1.jpg';

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
    </section>
  );
};

const Book = (props) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {console.log(props)}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
