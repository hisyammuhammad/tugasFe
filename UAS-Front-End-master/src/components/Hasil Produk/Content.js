import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Padi from "./gambar/padi.jpg"
import Jagung from "./gambar/jagung.jpg"
import Tebu from "./gambar/tebu.jpg"
import Cabe from "./gambar/cabe.jpg"
import Kacang from "./gambar/kacang.jpg"
import Porang from "./gambar/porang.jpg"
import Singkong from "./gambar/singkong.jpg"

function BasicExample() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Container>
      <Row>
        <Col></Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col></Col>
      </Row>
    </Container>
    <div className='d-flex justify-content-center mt-4 mb-3'>
    <Card className='kartu mx-3' style={{ width: '20rem', height: '25rem' }}>
      <Card.Img style={{width: '100%', height: '15rem'}} variant="top" src={Padi} />
      <Card.Body>
        <Card.Title>PADI</Card.Title>
        <Card.Text>
          Padi sebagai makanan pokok di  Indonesia sudah tentu menjadi komoditas utama pertanian di Kabpaten Madiun
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='kartu mx-3' style={{ width: '20rem', height: '25rem' }}>
      <Card.Img style={{width: '100%', height: '15rem'}} variant="top" src={Jagung} className='w-100' />
      <Card.Body>
        <Card.Title>JAGUNG</Card.Title>
        <Card.Text>
          Jagung sebagai sumber karbohidrat pengganti nasi menjadikan peluang yang tepat untuk mengembangkan jagung di kabupaten Madiun, terlebih memiliki tanah yang sesuai untuk dikembangkannya jagung.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='kartu mx-3' style={{ width: '20rem', height: '25rem' }}>
      <Card.Img style={{width: '100%', height: '15rem'}} variant="top" src={Tebu} />
      <Card.Body>
        <Card.Title>TEBU</Card.Title>
        <Card.Text>
          Tebu sebagai bahan pembuatan gula patut dikembangkan di Kabupaten Madiun dikarenakan Kabupaten Madiun memiliki pabrk gula sendiri yang mana berlokasi di Kota Madiun
        </Card.Text>
      </Card.Body>
    </Card>
    </div>

    <div className='d-flex justify-content-center mt-4 mb-3'>
    <Card className='kartu mx-3' style={{ width: '20rem', height: '25rem' }}>
      <Card.Img style={{width: '100%', height: '15rem'}} variant="top" src={Cabe} />
      <Card.Body>
        <Card.Title>CABAI</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='kartu mx-3' style={{ width: '20rem', height: '25rem' }}>
      <Card.Img style={{width: '100%', height: '15rem'}} variant="top" src={Kacang} />
      <Card.Body>
        <Card.Title>KACANG</Card.Title>
        <Card.Text>
          Sebagai salah satu jenis kacang-kacangan yang cukup digemari di berbagai karena manfaatnya yang begiru melimpah, kacang memiliki nilai jual yang cukup tinggi di Kabupaten Madiun. Maka dari itu sudah sesuai dikembangkan di kabupaten Madiun.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='kartu mx-3' style={{ width: '20rem', height: '25rem' }}>
      <Card.Img style={{width: '100%', height: '15rem'}} variant="top" src={Porang} />
      <Card.Body>
        <Card.Title>PORANG</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>

    <div className='d-flex justify-content-center mt-4 mb-3'>
    <Card className='kartu mx-3' style={{ width: '20rem', height: '25rem' }}>
      <Card.Img style={{width: '100%', height: '15rem'}} variant="top" src={Singkong} />
      <Card.Body>
        <Card.Title>SINGKONG</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </div>
  );
}

export default BasicExample;