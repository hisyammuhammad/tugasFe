import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const content = () => {
    return(
      <div className='d-flex container justify-content-between mt-4 mb-3'>

      <Card className='mx-3' style={{ width: '20rem', height: '30rem' }}>
      <iframe style = {{width: '100%', height: '400px'}} src="https://maps.google.com/maps?q=wonorejo%20kecamatan%20mejayan&t=k&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" marginheight="0" marginwidth="0"></iframe>
        <Card.Body>
          <Card.Title>Wonorejo</Card.Title>
          <Card.Text>
            Di daerah ini memiliki hasil panen yang dominan berupa Jagung biasanya di daerah diserang oleh hama seperti ulat tanah.
          </Card.Text>
          <Button variant="primary" href='https://www.corteva.id/berita/Hama-dan-Penyakit-Tanaman-Jagung-Serta-Cara-Pengendaliannya.html#:~:text=Pengendalian%20hama%20ini%20dapat%20dilakukan%20dengan%20cara%20melakukan%20penyemprotan%20menggunakan,dan%20dengan%20dosis%20sesuai%20anjuran.&text=Jenis%20belalang%20yang%20sering%20menyerang,jagung%20pada%20bagian%20daun%20muda.'>Go somewhere</Button>
        </Card.Body>
      </Card>
  
      <Card className='mx-3' style={{ width: '20rem', height: '30rem' }}>
      <iframe style = {{width: '100%', height: '400px'}} src="https://maps.google.com/maps?q=kebonagung%20mejayan&t=k&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" marginheight="0" marginwidth="0"></iframe>
        <Card.Body>
          <Card.Title>Kebonagung</Card.Title>
          <Card.Text>
            Di daerah ini biasanya memiliki hasil panen yang dominan berupa Padi biasanya di daerah diserang oleh hama seperti wereng.
          </Card.Text>
          <Button variant="primary" href='https://dinpertanpangan.demakkab.go.id/?p=2747'>Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card className='mx-3' style={{ width: '20rem', height: '30rem' }}>
      <iframe style = {{width: '100%', height: '400px'}} src="https://maps.google.com/maps?q=wonoasri%20kecamatan%20wonoasri&t=k&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" marginheight="0" marginwidth="0"></iframe>
        <Card.Body>
          <Card.Title>Wonoasri</Card.Title>
          <Card.Text>
            Di daerah ini biasanya memiliki hasil panen yang dominan berupa Padi biasanya di daerah diserang oleh hama seperti wereng.
          </Card.Text>
          <Button variant="primary" href='https://dinpertanpangan.demakkab.go.id/?p=2747'>Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card className='mx-3' style={{ width: '20rem', height: '30rem' }}>
      <iframe style = {{width: '100%', height: '400px'}} src="https://maps.google.com/maps?q=diskominfo madiun&t=&z=10&ie=UTF8&iwloc=&output=embed" frameborder="0" marginheight="0" marginwidth="0"></iframe>
        <Card.Body>
          <Card.Title>Kaliabu</Card.Title>
          <Card.Text>
            Di daerah ini biasanya memiliki hasil panen yang dominan berupa Padi biasanya di daerah diserang oleh hama seperti wereng.
          </Card.Text>
          <Button variant="primary" href='https://dinpertanpangan.demakkab.go.id/?p=2747'>Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card className='mx-3' style={{ width: '20rem', height: '30rem' }}>
      <iframe style = {{width: '100%', height: '400px'}} src="https://maps.google.com/maps?q=kaliabu%20kecamatan%20mejayan&t=k&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" marginheight="0" marginwidth="0"></iframe>
        <Card.Body>
          <Card.Title>Garon</Card.Title>
          <Card.Text>
            Di daerah ini biasanya memiliki hasil panen yang dominan berupa Padi biasanya di daerah diserang oleh hama seperti wereng.
          </Card.Text>
          <Button variant="primary" href='https://dinpertanpangan.demakkab.go.id/?p=2747'>Go somewhere</Button>
        </Card.Body>
      </Card>
      </div>
    );
}

export default content