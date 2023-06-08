import react from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import content1 from './content1.jpg';
import content2 from './content2.jpg';
import content3 from './content3.jpg';
import content4 from './content4.jpg';
import "./Content.css";


const content = () => {
    return(
      <div className="background bg-red mt-4">
      <h3 className="p-4 fw-bold" style={{ color: "white" }}>
        Berita Terpopuler
      </h3>
      <div className="container d-flex justify-content-between mt-4">
      <CardGroup>
        <Card>
            <Card.Img variant="top" src={content1} height={180} />
            <Card.Body>
                <Card.Title></Card.Title>
              <Card.Subtitle className="text-muted pb-2">Jokowi: Selamat Hari Tani Nasional, Pemerintah Dukung Sektor Pertanian Sepenuhnya
</Card.Subtitle>
              <Button variant="success" size="sm">Selengkapnya</Button>
            </Card.Body>
          </Card>
        <Card>
            <Card.Img variant="top" src={content2} height={180} />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Subtitle className="text-muted pb-2">Jelang Hari Tani Nasional, Petani Sayur di Pangalengan Dicekik Tingginya Harga Pupuk hingga Ancaman Investor Wisata
</Card.Subtitle>
              <Button variant="success" size="sm">Selengkapnya</Button>
            </Card.Body>
          </Card>      
          <Card>
            <Card.Img variant="top" src={content3} height={180} />
            <Card.Body>
                <Card.Title></Card.Title>
              <Card.Subtitle className="text-muted pb-2">Peringati Hari Tani Nasional, Warga di Lumajang Berebut Gunungan Hasil Bumi dan Olahan Ketan
</Card.Subtitle>
              <Button variant="success" size="sm">Selengkapnya</Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={content4} height={180} />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Subtitle className="text-muted pb-2">Jelang Hari Tani Nasional, Petani Sayur di Pangalengan Dicekik Tingginya Harga Pupuk hingga Ancaman Investor Wisata</Card.Subtitle>
              <Button variant="success" size="sm">Selengkapnya</Button>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
      <p className="mt-4 text-center"><a href="#" style={{ color: "white" }}>Jelajahi Semua</a></p>
    </div>

    );
}

export default content 