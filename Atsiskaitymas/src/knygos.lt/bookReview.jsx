import Form from 'react-bootstrap/Form';
import NavBar from './navBar';
import '../index.css';

function TextControlsExample() {
  return (
    <Form>
    <NavBar/>
    <h4>Here you can place your book review</h4>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Your name</Form.Label>
        <Form.Control type="text" placeholder="Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>What you think about the book?</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
  );
}


export default TextControlsExample;