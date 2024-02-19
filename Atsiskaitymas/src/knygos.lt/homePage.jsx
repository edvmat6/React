import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Navbar } from 'react-bootstrap';
import NavBar from './navBar';
import "../App.css";

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch('https://65d1faa1987977636bfbc142.mockapi.io/api/react-test/books');
      if (!response.ok) {
        throw new Error('Failed to fetch books');
      }
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const handleBookAction = async (bookId, reserved) => {
    try {
      const method = reserved ? 'PUT' : 'PATCH';
      const response = await fetch(`https://65d1faa1987977636bfbc142.mockapi.io/api/react-test/books/${bookId}`, {
        method: method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ reserved: !reserved })
      });
      if (!response.ok) {
        throw new Error(reserved ? 'Failed to return the book' : 'Failed to lend the book');
      }
      setBooks(prevBooks =>
        prevBooks.map(book =>
          book.id === bookId ? { ...book, reserved: !reserved } : book
        )
      );
    } catch (error) {
      console.error('Error updating book status:', error);
    }
  };

  return (

    <Container>
      <NavBar/>
      <Row xs={1} md={2} lg={3} className="g-4">
        {books.map(book => (
          <Col key={book.id}>
            <div className="card">
              <img src={book.cover} className="card-img-top" alt={book.title} />
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text">{book.author}</p>
                {book.reserved ? (
                  <Button variant="primary" onClick={() => handleBookAction(book.id, true)}>Return</Button>
                ) : (
                  <Button variant="primary" onClick={() => handleBookAction(book.id, false)}>Lend</Button>
                )}
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default BookList;
