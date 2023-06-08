import react from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import content1 from './content1.jpg';
import content2 from './content2.jpg';
import content3 from './content3.jpg';
import content4 from './content4.jpg';
import CardGroup from 'react-bootstrap/CardGroup';

const content = () => {
    return(
      <div d-flex justify-content-center mt-4 >
        <CardGroup>
            <Card style={{ width: '15rem' }}>
              <Card.Img variant="top" src={content1} height={250} />
              <Card.Body>
                <Card.Title>SPORT</Card.Title>
                <Card.Text>
                  
                </Card.Text>
                <Button variant="primary" href="Sport" >read more</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '15rem', height:'400px' }}>
            <Card.Img variant="top" src={content2} height={250} />
              <Card.Body>
                <Card.Title>Food</Card.Title>
                <Card.Text>
                 
                </Card.Text>
                <Button variant="primary" href="Food">read more</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '15rem', height:'400px' }}>
            <Card.Img variant="top" src={content3} height={250} />
              <Card.Body>
                <Card.Title>HEALTH </Card.Title>
                <Card.Text>
                  
                </Card.Text>
                <Button variant="primary">read more</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '15rem' }}>
              <Card.Img variant="top" src={content4} height={250} />
              <Card.Body>
                <Card.Title>ENTERTAINMENT</Card.Title>
                <Card.Text>
                  
                </Card.Text>
                <Button variant="primary">read more</Button>
              </Card.Body>
            </Card>
        </CardGroup>
        </div>
    );
}

export default content 