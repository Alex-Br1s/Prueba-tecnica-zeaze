//import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import images from './utils/array-of-images';
import PhotoGallery from './components/PhotoGallery';
import Navbar from './components/Navbar';
import BreadCrums from './components/BreadCrums';
import AlbumFotografo from './components/AlbumFotografo';
import Photographer from './components/Photographer';
import Footer from './components/Footer';

function App() {
  return (
    <div className='bg-light'>
      <Navbar />
      <BreadCrums />
      <AlbumFotografo />
      <PhotoGallery images={images}/>
      <Photographer />
      <Footer />
    </div>
  )
}

export default App
