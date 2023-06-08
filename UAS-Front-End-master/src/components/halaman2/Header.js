import react from "react";
import Button from "react-bootstrap/Button";
import CardGroup from 'react-bootstrap/CardGroup';
import Card from "react-bootstrap/Card";
import gbr1 from './gbr1.jpg';
import gbr2 from './gbr2.jpg';
import gbr3 from './gbr3.jpg';
import gbr4 from './gbr4.jpg';
import "./Content.css";


const header = () => {
    return(
        <>
        <h3 className="tempat container mt-4 fw-bold">Berrita Terkini</h3>
        <div className="populer container d-flex justify-content-between mt-4">
        <CardGroup>
          <Card>
            <Card.Img variant="top" src={gbr1} height={180} />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Subtitle className="text-muted pb-2">J11 Kelompok Tani di Aceh Besar Dapat Bantuan Alsintan dari Kementan</Card.Subtitle>
              <Button variant="success" size="sm">Selengkapnya</Button>
            </Card.Body>
          </Card>
  
          <Card>
            <Card.Img variant="top" src={gbr2} height={180} />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Subtitle className="text-muted pb-2">Ribuan Buruh Tani Tembakau di Blora Terima BLT Rp 1,2 Juta Per Orang
</Card.Subtitle>
              <Button variant="success" size="sm">Selengkapnya</Button>
            </Card.Body>
          </Card>
  
          <Card>
            <Card.Img variant="top" src={gbr3} height={180} />
            <Card.Body>
                <Card.Title></Card.Title>
              <Card.Subtitle className="text-muted pb-2">5 Dorong Produktivitas Pertanian dan Pemulihan Ekonomi Nasional, Kementan Jalankan Program JUT
</Card.Subtitle>
              <Button variant="success" size="sm">Selengkapnya</Button>
            </Card.Body>
          </Card>
  
          <Card>
            <Card.Img variant="top" src={gbr4} height={180} />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Subtitle className="text-muted pb-2">Peringati Hari Tani Nasional, Warga di Lumajang Berebut Gunungan Hasil Bumi dan Olahan Ketan5
</Card.Subtitle>
              <Button variant="success" size="sm">Selengkapnya</Button>
            </Card.Body>
          </Card>      
        </CardGroup>
        </div>
      </>
  
    );
}

export default header