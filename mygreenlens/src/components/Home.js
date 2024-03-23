import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

function AutoLayoutVariableExample() {
  return (
    <Container>
      <Row className="justify-content-md-center">
      <h1>
        Green Lens
      </h1>
      <h2>
        Example heading
      </h2>
      <Placeholder style={{background:"#94aa5b", borderColor:"#94aa5b"}} xs={12} size="lg" />
      </Row>
      <div>
    <Row> <Col>
     
    </Col></Row>

    </div>
      <div className="d-flex justify-content-around">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://t4.ftcdn.net/jpg/05/66/23/45/360_F_566234573_0wRtGNCoV93vm3nCcBuRDIEJOq4BXlQ2.jpg" />
        <Card.Body>
          <Card.Title>Why is Recycling Important?</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button style={{background:"#94aa5b", borderColor:"#94aa5b"}} onClick={() => window.open("https://www.brysonrecycling.org/recycling/why-recycle/", '_blank')}>Website</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://waste-management-world.com/imager/media/wasteManagementWorld/3820706/AdobeStock_571968683_428fd902f4247199467725e7eccf1673.jpeg " />
        <Card.Body>
          <Card.Title>Tips for Recycling</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button style={{background:"#94aa5b", borderColor:"#94aa5b"}} onClick={() => window.open("https://www.earthday.org/7-tips-to-recycle-better/", '_blank')}>Website</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://t4.ftcdn.net/jpg/05/55/33/01/360_F_555330199_GU19A8qbz8DAlTqjw2u6ZCTqkn5yfGzS.jpg" />
        <Card.Body>
          <Card.Title>What Happens if We Don't Recycle?</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button style={{background:"#94aa5b", borderColor:"#94aa5b"}} onClick={() => window.open("https://closedlooprecycling.us/the-negative-effects-of-not-recycling/", '_blank')}>Website</Button>
        </Card.Body>
      </Card>
    </div>
    <div>
    <Row> <Col>
    <Button style={{background:"#94aa5b", borderColor:"#94aa5b"}} onClick={() => window.open("https://docs.google.com/document/d/1zuIPsxIfFrgpeYNWzr-r1z-vn241xfTPDqkUPoGp2gQ/edit", '_blank')}>Image Sources</Button>
    </Col></Row>
    </div>
    </Container>
  );
}

export default AutoLayoutVariableExample;