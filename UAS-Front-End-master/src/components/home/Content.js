import { Container } from 'react-bootstrap';
import React from "react";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import gambar from "./Gambar/panen.png"
import gambar1 from "./Gambar/nyemprot.jpg"
import gambar2 from "./Gambar/klmpk.jpg"


const Header = () => {
    return(
        <section>
            <Container>
            <Row>
                <Col></Col>
                <Col></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col></Col>
            </Row>
            <div className="d-flex justify-content-between mt-3 mb-3 pt-3">
                <div className="gambar float-end">
                    <img src={gambar1} alt='nyemprot.jpg' width={500}></img>
                </div>

                <div className="daftar me-2 ms-3" style={{textAlign:'justify'}}>
                    <h2 className="color fw-bold">Mitigasi Hama</h2>
                    <p className='mt-2 text-muted'>hama adalah pengaturan makhluk-makhluk hidup pengganggu yang disebut hama karena dianggap mengganggu kesehatan manusia, ekologi, atau ekonomi. Pengendalian merujuk pada pembunuhan hama hewan seperti rubah dan tikus, biasanya dilakukan oleh petugas atau departemen pengendalian hama...</p>
                    <Button variant ="outline-dark" href="MitigasiHama">Baca Selengkapnya</Button>
                    </div>
                </div>

            <div className="d-flex justify-content-between mt-3 mb-3 pt-3">
            <div className="daftar me-2 ms-3" style={{textAlign:'justify'}}>
                    <h2 className="color fw-bold">Hasil Panen</h2>
                    <p className='mt-2 text-muted'>Hasil panen adalah hasil usaha tani, hasil panen, atau sangat sering disingkat hasil saja, yaitu besaran yang menggambarkan banyaknya produk panen usaha tani yang diperoleh dalam satu hasil meluaskan lahan dalam satu siklus produksi...</p>
                    <Button variant="outline-dark" href='HasilProduk'>Baca Selengkapnya</Button>
                    </div>
                
                <div className="gambar float-end">
                    <img src={gambar} alt='panen.png' width={500}></img>
              </div>
            </div>

            <div className="d-flex justify-content-between mt-3 mb-3 pt-3">
                <div className="gambar float-end">
                    <img src={gambar2} alt='klmpk.jpg' width={500}></img>
                </div>

                <div className="daftar me-2 ms-3" style={{textAlign:'justify'}}>
                    <h2 className="color fw-bold">Kelompok Tani</h2>
                    <p className='mt-2 text-muted'>Kelompok Tani (POKTAN) adalah kumpulan petani / peternak / pekebun yang dibentuk oleh para petani atas dasar kesamaan kepentingan, kesamaan kondisi lingkungan sosial, ekonomi, dan sumberdaya, kesamaan komoditas, dan keakraban untuk meningkatkan dan mengembangkan usaha anggota...</p>
                    <Button variant="outline-dark" href='KelompokTani'>Baca Selengkapnya</Button>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Header