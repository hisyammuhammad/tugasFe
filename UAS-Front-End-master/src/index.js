import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import HasilProduk from "./HasilProduk";
import MitigasHama from "./MitigasiHama";
import KelompokTani from "./KelompokTani";
import Tani from "./Tani";

const rootElement = document.getElementById("root");
render(
<BrowserRouter>
  <Routes>
            <Route path='/' element={<App />} />
            <Route path='HasilProduk' element={<HasilProduk />} />
            <Route path='MitigasiHama' element={<MitigasHama />} />
            <Route path='Kelompoktani' element={<Tani />} />
  </Routes>
</BrowserRouter>,
rootElement
);