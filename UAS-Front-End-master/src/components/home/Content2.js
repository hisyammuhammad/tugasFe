import { Container } from 'react-bootstrap';
import React from "react";
import gambar from './Gambar/gbr2.jpg';
import {FaLeaf} from "react-icons/fa";
import {AiFillBug} from "react-icons/ai";
import {RiCommunityFill} from "react-icons/ri";

const Content2 = () => {
    return(
        <section className='content2'>
            <Container>
            <div className="d-flex justify-content-between mt-5">
                <div className="pt-2 daftar me-2">
                    <h2 className="fw-bold text-light">Jangan Biarkan 
                    <br/>Petani Dianggap Remeh!!</h2>
                    <p className='mt-2 text-light'>Dapatkan informasi seputar Pertanian dengan<span className="fw-bold"> Inpo Tani</span></p>
                    <ul>
                        <li className='mt-2 text-light'><FaLeaf />    Memberikan Informasi Terkait Benih Tanaman yang Apik</li>
                        <li className='mt-2 text-light'><AiFillBug />    Memberikan Informasi Cara Mengatasi Hama Sawah</li>
                        <li className='mt-2 text-light'><RiCommunityFill />    Memuat Informasi Tentang Kelompok Tani</li>
                    </ul>
                </div>
                <div className="gambar float-end">
                    <img src={gambar} alt='gbr2' width={600}></img>
                </div>
            </div>
            </Container>
        </section>
    );
}

export default Content2