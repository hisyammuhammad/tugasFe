import { Container } from 'react-bootstrap';
import React from "react";
import gambar from "./gambar/hasil.jpg"


const Header = () => {
    return(
        <section>
            <Container>
            <div className="d-flex justify-content-between mt-5 mb-5 pt-5">
                <div className="gambar float-end">
                    <img src={gambar} alt='hasil.jpg' width={600}></img>
                </div>

                <div className="daftar me-2 ms-3" style={{textAlign:'justify'}}>
                    <h2 className="fw-bold">Hasil Panen</h2>
                    <p className='mt-2 text-muted'>adalah hasil usaha tani, hasil panen, atau sangat sering disingkat hasil saja, yaitu besaran yang menggambarkan banyaknya produk panen usaha tani yang diperoleh dalam satu hasil meluaskan lahan dalam satu siklus produksi.
                    <br/><br/>
                    Hasil panen di Indonesia memiliki keragaman di berbagai sektor, terutama dari sektor pertanian. Sejak dahulu, Indonesia selalu kaya dengan hasil dari hasil pertanian, seperti padi, kedelai, jagung, kacang tanah, ketela pohon, dan ubi jalar.
                    <br/><br/>
                    Berfokus pada pertanian, Kabupaten Madiun merupakan salah satu daerah penyedia hasil pertanian yang dapat dikatakan melimpah. Sektor pertanian yang dimaksud ialah padi. Padi sebagai penyangga pangan di Indonesia sangat memiliki peran penting bagi masyarakat.</p>
                </div>
            </div>
            </Container>
        </section>
    );
}

export default Header