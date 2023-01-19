import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ItemDisplay({item}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Button variant="primary">See Full Details</Button>
      </Card.Body>
    </Card>
  );
}

export default ItemDisplay;