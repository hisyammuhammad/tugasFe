import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import kelompok from './Gambar/kelompok.jpg';
import kelompok1 from './Gambar/kelompok1.jpg';
import kelompok2 from './Gambar/kelompok2.jpg';
import kelompok3 from './Gambar/kelompok3.jpg';

function KelTani() {
    return (
      <div>
      <div className='d-flex justify-content-center mt-4 mb-3'>
      <Card className='kartu mx-3' style={{ width: '20rem', height: '25rem' }}>
        <Card.Img style={{width: '100%', height: '15rem'}} variant="top" src={kelompok} />
        <Card.Body>
          <Card.Title>Kelompok Tani Jaya Abadi</Card.Title>
          <Card.Text>
            Desa Wonorejo, Kec.Mejayan , Kab. Madiun
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
  
      <Card className='kartu mx-3' style={{ width: '20rem', height: '25rem' }}>
        <Card.Img style={{width: '100%', height: '13rem'}} variant="top" src={kelompok1} />
        <Card.Body>
          <Card.Title>Kelompok Tani Suka Maju</Card.Title>
          <Card.Text>
           Desa Kebonagung, Kec.Mejayan , Kab. Madiun
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
  
      <Card className='kartu mx-3' style={{ width: '20rem', height: '25rem' }}>
        <Card.Img style={{width: '100%', height: '13rem'}} variant="top" src={kelompok2} />
        <Card.Body>
          <Card.Title>Kelompok Tani Makmur</Card.Title>
          <Card.Text>
          Desa Wonoasri, Kec.Wonoasri , Kab. Madiun
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card className='kartu mx-3' style={{ width: '20rem', height: '25rem' }}>
        <Card.Img style={{width: '100%', height: '13rem'}} variant="top" src={kelompok3} />
        <Card.Body>
          <Card.Title>Kelompok Tani Sekar Sari</Card.Title>
          <Card.Text>
          Desa Garon, Kec.Balerejo , Kab. Madiun
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      </div>
      </div>
  );
}

export default KelTani;