import React, { useEffect, useState } from 'react';

export interface UserType {
  id: number;
  name: string;
}

export interface BookType {
  id: number;
  title: string;
  //   description: string;
  //   author: UserType | string;
}

const BookList = () => {
  const [books, setBooks] = useState<BookType[]>([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  async function fetchBooks() {
    // const res = await fetch('/books');
    const res = await fetch('http://127.0.0.1:3002/books');
    const books: BookType[] = await res.json();
    setBooks(books);
  }

  return (
    <div>
      {books.map((book) => (
        <p key={book.id}>{book.title}</p>
      ))}
    </div>
  );
};

export default BookList;
