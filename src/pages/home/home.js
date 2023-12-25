import { Navbar } from "../../components/navbar"
import Tabel from "../dashboard/Tabel"

const home = () => {
  return (
    <div>
        <Navbar />
        <h2 className="cekurukuk">Ini Halaman Profil Home</h2>
        <div className="p-5 text-center bg-image rounded-3" style={{backgroundImage: 'url("http://www.sman1rogojampi.sch.id/img_header/gerbang.jpg")', height: 400}}>
  <div className="mask" style={{backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>
    <div className="d-flex justify-content-center align-items-center h-100">
      <div className="text-white">
        <h1 className="mb-3"> SMA NEGERI 1 ROGOJAMPI</h1>
        
      </div>
    </div>
  </div>
</div>
      <Tabel />
    </div>
  );
};

export default home;