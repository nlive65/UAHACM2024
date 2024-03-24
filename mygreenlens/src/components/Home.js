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
    <Container >
      <Row className="justify-content-md-center">
      <h1 className="display-2"> <b>
        Green Lens
        </b> </h1>
      <h4> <b>
        Easy way to tell what is able to be recycled!
        </b></h4>
      <h6>
        When being asked to recycle, it is hard to know what can and can not be recycled. Our goal is 
        to give people and easy way to tell when an item can be recycled.
        We have created an AI model that can tell you if you can recycle that item. 
        
      </h6>
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
          <Card.Title><b>Why is Recycling Important?</b></Card.Title>
          <Card.Text>
            Recycling is a way that individual people can help reduce waste
            and help the enviroment. The more people who regularly recycle can help
            make a large impact on saving the Earth. Below are resources that explain exactly 
            how important recycling is for the enviroment. 
          </Card.Text>
          <Button style={{background:"#94aa5b", borderColor:"#94aa5b"}} onClick={() => window.open("https://www.brysonrecycling.org/recycling/why-recycle/", '_blank')}>Resource</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://waste-management-world.com/imager/media/wasteManagementWorld/3820706/AdobeStock_571968683_428fd902f4247199467725e7eccf1673.jpeg " />
        <Card.Body>
          <Card.Title><b>Tips for Recycling</b></Card.Title>
          <Card.Text>
           When recycling, it is important to follow the rules of 
           the recycling center. When different materials are recycled they 
           have to be sorted so making sure they can be properly sorted 
           is just as important as the actual act of recycling. Below are resources that 
           explain how you can recycle better. 
          </Card.Text>
          <Button style={{background:"#94aa5b", borderColor:"#94aa5b"}} onClick={() => window.open("https://www.earthday.org/7-tips-to-recycle-better/", '_blank')}>Resource</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://t4.ftcdn.net/jpg/05/55/33/01/360_F_555330199_GU19A8qbz8DAlTqjw2u6ZCTqkn5yfGzS.jpg" />
        <Card.Body>
          <Card.Title><b>What Happens if We Don't Recycle?</b></Card.Title>
          <Card.Text>
            If people stopped recycling then not just the landfills will be affected.
            Trash will be displaced into bodies of water or in natural reserved.
            Below are resources that explain in more detail the effects not recycling 
            would have on the enviroment. 
          </Card.Text>
          <Button style={{background:"#94aa5b", borderColor:"#94aa5b"}} onClick={() => window.open("https://closedlooprecycling.us/the-negative-effects-of-not-recycling/", '_blank')}>Resource</Button>
        </Card.Body>
      </Card>
    </div>
    <div>
    <Row> <Col>
    <Row><Placeholder style={{background:"#94aa5b", borderColor:"#94aa5b"}} xs={12} size="lg" />
    </Row>
    <Button style={{background:"#94aa5b", borderColor:"#94aa5b"}} onClick={() => window.open("https://docs.google.com/document/d/1zuIPsxIfFrgpeYNWzr-r1z-vn241xfTPDqkUPoGp2gQ/edit", '_blank')}>Image Sources</Button>
    </Col></Row>
    </div>
    </Container>
  );
}

export default AutoLayoutVariableExample;